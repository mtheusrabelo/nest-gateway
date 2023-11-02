import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ThrottlerProvider, ThrottlerRootModule } from './throttler';
import handlers from './handlers';
import collaborations from '../application/collaborations';
import gateways from './gateways';

@Module({
  imports: [HttpModule, ThrottlerRootModule],
  controllers: [...handlers],
  providers: [ThrottlerProvider, ...gateways, ...collaborations],
})
export class AppModule {}
