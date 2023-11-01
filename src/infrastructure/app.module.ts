import { Module } from '@nestjs/common';
import { HelloWorldHandler } from './handlers/hello-world.handler';
import { SecretHandler } from './handlers/secret.handler';
import { GetSecretCollaboration } from '../application/collaborations/get-secret.collaboration';
import { GetHelloWorldCollaboration } from '../application/collaborations/hello-world.collaboration';
import { HttpModule } from '@nestjs/axios';
import { HttpBinGateway } from './gateways/http-bin.gateway';

const collaborations = [GetHelloWorldCollaboration, GetSecretCollaboration];
const handlers = [HelloWorldHandler, SecretHandler];
const gateways = [HttpBinGateway];

@Module({
  imports: [HttpModule],
  controllers: [...handlers],
  providers: [...gateways, ...collaborations],
})
export class AppModule {}
