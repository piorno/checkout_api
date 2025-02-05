import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { documentBuilderConfig } from './core/swagger/config';
import { ConfigService } from '@nestjs/config';
import { Env } from './env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configServise = app.get<ConfigService<Env, true>>(ConfigService);

  app.enableCors();

  const document = SwaggerModule.createDocument(app, documentBuilderConfig);
  SwaggerModule.setup('/api/v1', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
