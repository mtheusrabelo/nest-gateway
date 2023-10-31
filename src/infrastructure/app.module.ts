import { Module } from '@nestjs/common';
import { HelloWorldHandler } from './handlers/hello-world.handler';
import { GetHelloWorldCollaboration } from '../application/collaborations/hello-world.collaboration';
import { HttpModule } from '@nestjs/axios';
import { HttpBinGateway } from './gateways/http-bin.gateway';

const collaborations = [GetHelloWorldCollaboration];
const handlers = [HelloWorldHandler];
const gateways = [HttpBinGateway];

@Module({
  imports: [HttpModule],
  controllers: [...handlers],
  providers: [...gateways, ...collaborations],
})
export class AppModule {}
