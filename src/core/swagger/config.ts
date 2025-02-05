import { DocumentBuilder } from '@nestjs/swagger';

const documentBuilderConfig = new DocumentBuilder()
  .setTitle('API Pay')
  .setDescription('Api de pagamento')
  .setVersion('1.0')
  .build();

export { documentBuilderConfig };
