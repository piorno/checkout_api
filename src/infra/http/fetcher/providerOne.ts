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
    const place = `PROVIDER_ONE_${this.random()}`;
    const url = this.configServise.get(place);

    const callName = `[${this.constructor.name}]`;
    this.logger.log(`${callName} = Preparing to make request to [${url}]`);

    const { data, status } = await this.httpService.axiosRef.request({
      ...options,
      baseURL: url,
      headers: options.headers as AxiosHeaders,
      httpAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
    this.logger.log(
      `${callName} - Request recived [${url}] with status [${status}] and body [${JSON.stringify(data)}]`,
    );
    return { data, status };
  }

  private random() {
    return Math.floor(Math.random() * (2 - 1 + 1) + 1);
  }
}
