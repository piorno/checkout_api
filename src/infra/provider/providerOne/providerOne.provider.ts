import { Injectable } from '@nestjs/common';
import ProviderOneFetcher from '../../../infra/http/fetcher/providerOne';
import {
  PaymentOneBody,
  PaymentOneResponse,
} from 'src/infra/provider/providerOne/type';
import { PaymentRequestBody } from 'src/server/payment/type';

@Injectable()
class ProviderOneProvider {
  constructor(private readonly providerOneFetcher: ProviderOneFetcher) {}

  async makePayment(params: PaymentRequestBody) {
    const body: PaymentOneBody = {
      amount: params.amount,
      currency: params.currency,
      description: params.description,
      paymentMethod: {
        type: 'card',
        card: {
          cvv: params.card.cvv,
          expirationDate: params.card.expiration,
          holderName: params.card.holder,
          installments: params.card.installmentNumber,
          number: params.card.number,
        },
      },
    };
    const { data, status } =
      await this.providerOneFetcher.post<PaymentOneResponse>('', body);
    return { data, status };
  }
}

export { ProviderOneProvider };
