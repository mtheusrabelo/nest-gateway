import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './infrastructure/app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console,
  });

  const port = process.env.PORT || 3000;
  app.use(helmet());
  await app.listen(port);
}
bootstrap();
