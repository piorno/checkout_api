import { Global, Module } from '@nestjs/common';
import { HttpAppModule } from '../http/http.module';
import { ProviderOneProvider } from './providerOne/providerOne.provider';
import { ProviderTwoProvider } from './providerTwo/providerTwo.provider';

@Global()
@Module({
  imports: [HttpAppModule],
  providers: [ProviderOneProvider, ProviderTwoProvider],
  exports: [ProviderOneProvider, ProviderTwoProvider],
})
class ProviderModule {}
export { ProviderModule };
