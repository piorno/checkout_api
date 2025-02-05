import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import ProviderOneFetcher from './fetcher/providerOne';
import ProviderTwoFetcher from './fetcher/providerTwo';
import { LoggerCustomService } from '../logger/logger.service';

@Module({
  imports: [HttpModule],
  exports: [ProviderOneFetcher, ProviderTwoFetcher, LoggerCustomService],
  providers: [ProviderOneFetcher, ProviderTwoFetcher, LoggerCustomService],
})
class HttpAppModule {}
export { HttpAppModule };
