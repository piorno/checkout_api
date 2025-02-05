import { ProviderOneProvider } from '../../../infra/provider/providerOne/providerOne.provider';
import { ProviderTwoProvider } from '../../../infra/provider/providerTwo/providerTwo.provider';
import { PaymentRequestBody } from '../type';
import { Injectable } from '@nestjs/common';
import { ApplicationErros } from '../../../core/errors/errors';

@Injectable()
class PaymentService {
  constructor(
    private readonly providerOneProvider: ProviderOneProvider,
    private readonly providerTwo: ProviderTwoProvider,
  ) {}
  async execute(params: PaymentRequestBody) {
    const response = await this.providerOneProvider.makePayment(params);
    if (response.data.status == 'authorized') {
      return;
    }
    const res = await this.providerTwo.makePayment(params);
    if (res.data.status === 'failed') {
      throw ApplicationErros.paymentError;
    }
  }
}

export { PaymentService };
