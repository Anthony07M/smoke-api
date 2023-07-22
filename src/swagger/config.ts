import { DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';

export const config = new DocumentBuilder()
  .setTitle('Smoke Api')
  .setDescription('Smoke API for TCC ')
  .setVersion('1.0.0')
  .build();

export const options: SwaggerDocumentOptions = {
  deepScanRoutes: true,
  operationIdFactory: (controllerKey: string, methodKey: string) => {
    return methodKey;
  },
};
