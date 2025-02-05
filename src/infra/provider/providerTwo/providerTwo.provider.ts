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
    const { data, status } =
      await this.providerTwoFetcher.post<PaymentTwoResponse>(
        'transactions',
        body,
      );
    return { data, status };
  }
}

export { ProviderTwoProvider };
