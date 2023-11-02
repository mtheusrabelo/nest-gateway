import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './infrastructure/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';

function setupSwagger(app) {
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

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console,
  });

  setupSwagger(app);

  const port = process.env.PORT || 3000;
  app.use(helmet());
  await app.listen(port);
}
bootstrap();
