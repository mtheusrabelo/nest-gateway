import { Module } from '@nestjs/common';
import { HelloWorldHandler } from './handlers/hello-world.handler';
import { SecretHandler } from './handlers/secret.handler';
import { ThrottlerHandler } from './handlers/throttler.handler';
import { HumansHandler } from './handlers/humans.handler';
import { GetSecretCollaboration } from '../application/collaborations/get-secret.collaboration';
import { GetHelloWorldCollaboration } from '../application/collaborations/hello-world.collaboration';
import { TestThrottlerCollaboration } from '../application/collaborations/test-throttler.collaboration';
import { CreateHumanCollaboration } from '../application/collaborations/create-human.collaboration';
import { HttpModule } from '@nestjs/axios';
import { HttpBinGateway } from './gateways/http-bin.gateway';
import { ThrottlerProvider, ThrottlerRootModule } from './throttler';

const collaborations = [
  GetHelloWorldCollaboration,
  GetSecretCollaboration,
  TestThrottlerCollaboration,
  CreateHumanCollaboration,
];
const handlers = [
  HelloWorldHandler,
  SecretHandler,
  ThrottlerHandler,
  HumansHandler,
];
const gateways = [HttpBinGateway];

@Module({
  imports: [HttpModule, ThrottlerRootModule],
  controllers: [...handlers],
  providers: [ThrottlerProvider, ...gateways, ...collaborations],
})
export class AppModule {}
