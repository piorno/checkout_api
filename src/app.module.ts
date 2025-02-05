import { Global, Module } from '@nestjs/common';
import { ProviderModule } from './infra/provider/provider.module';
import { ConfigModule } from '@nestjs/config';
import { PaymentModule } from './server/payment/payment.module';
import { LoggerCustomService } from './infra/logger/logger.service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ProviderModule,
    PaymentModule,
  ],
  controllers: [],
  providers: [LoggerCustomService],
  exports: [LoggerCustomService],
})
export class AppModule {}
