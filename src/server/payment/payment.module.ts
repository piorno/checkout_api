import { Module } from '@nestjs/common';
import { ProviderModule } from '../../infra/provider/provider.module';
import { PaymentsController } from './controller/payment.controller';
import { PaymentService } from './service/payment.service';

@Module({
  imports: [ProviderModule],
  controllers: [PaymentsController],
  providers: [PaymentService],
})
class PaymentModule {}
export { PaymentModule };
