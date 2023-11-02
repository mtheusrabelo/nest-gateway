import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setupSwagger(app) {
  const config = new DocumentBuilder()
    .setTitle('Nest Gateway')
    .setDescription('Modern API Gateway on top of NestJS')
    .setVersion('1.0')
    .addGlobalParameters({
      name: 'Referer',
      in: 'header',
    })
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
}
