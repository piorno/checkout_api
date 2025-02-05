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
    const url = this.random();
    const { data, status } =
      await this.providerOneFetcher.post<PaymentOneResponse>(
        `${url}/charges`,
        body,
      );
    return { data, status };
  }

  private random() {
    const testeUrls = [
      'd281d852-1f94-4486-84e5-56aa11af1abd',
      '26ea0f96-7af0-4cb0-a7ff-a7eb8342ccd9',
    ];
    return testeUrls[Math.floor(Math.random() * (1 - 0 + 1) + 0)];
  }
}

export { ProviderOneProvider };
