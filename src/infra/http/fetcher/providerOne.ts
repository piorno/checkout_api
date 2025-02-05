import Fetcher from '../../../core/fetcher/fetcher';
import { FetchOptions, ReturnRequest } from '../../../core/fetcher/types';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { AxiosHeaders } from 'axios';
import * as https from 'https';
import { Injectable } from '@nestjs/common';
import { LoggerCustomService } from '../../logger/logger.service';

@Injectable()
export default class ProviderOneFetcher extends Fetcher {
  constructor(
    private readonly configServise: ConfigService,
    private readonly httpService: HttpService,
    private logger: LoggerCustomService,
  ) {
    super();
  }

  async fetch<T>(options: FetchOptions = {}): Promise<ReturnRequest<T>> {
    const url = this.configServise.get('PROVIDER_ONE');

    const callName = `[${this.constructor.name}]`;
    this.logger.log(
      `${callName} = Preparing to make request to [${url}/${options.url}]`,
    );

    const { data, status } = await this.httpService.axiosRef.request({
      ...options,
      baseURL: url,
      headers: options.headers as AxiosHeaders,
      httpAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
    this.logger.log(
      `${callName} - Request recived [${url}/${options.url}] with status [${status}] and body [${JSON.stringify(data)}]`,
    );
    return { data, status };
  }
}
