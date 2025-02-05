import { Injectable } from '@nestjs/common';
import ProviderTwoFetcher from '../../../infra/http/fetcher/providerTwo';
import { PaymentRequestBody } from 'src/server/payment/type';
import { PaymentTwoBody, PaymentTwoResponse } from './type';

@Injectable()
class ProviderTwoProvider {
  constructor(private readonly providerTwoFetcher: ProviderTwoFetcher) {}

  async makePayment(params: PaymentRequestBody) {
    const body: PaymentTwoBody = {
      amount: params.amount,
      currency: params.currency,
      paymentType: 'card',
      card: {
        cvv: params.card.cvv,
        expiration: params.card.expiration,
        holder: params.card.holder,
        installmentNumber: params.card.installmentNumber,
        number: params.card.number,
      },
      statementDescriptor: params.description,
    };
    const url = this.random();
    const { data, status } =
      await this.providerTwoFetcher.post<PaymentTwoResponse>(
        `${url}/transactions`,
        body,
      );
    return { data, status };
  }
  private random() {
    const testeUrls = [
      'a24d3d5b-c49e-490b-93f1-00c120ae89c9',
      '4ba15eaf-080d-45b4-a601-5258f3b27cac',
    ];
    return testeUrls[Math.floor(Math.random() * (1 - 0 + 1) + 0)];
  }
}

export { ProviderTwoProvider };
