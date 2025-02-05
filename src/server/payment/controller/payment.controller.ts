import { Body, Controller, Post } from '@nestjs/common';
import { PaymentRequestBody } from '../type';
import { PaymentService } from '../service/payment.service';

@Controller()
class PaymentsController {
  constructor(private readonly paymentService: PaymentService) {}
  @Post('payments')
  payments(@Body() bodyParam: PaymentRequestBody) {
    return this.paymentService.execute(bodyParam);
  }
}

export { PaymentsController };
