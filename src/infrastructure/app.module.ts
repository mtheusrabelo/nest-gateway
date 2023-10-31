import { Module } from '@nestjs/common';
import { HelloWorldHandler } from './handlers/hello-world.handler';
import { GetHelloWorldCollaboration } from '../application/collaborations/hello-world.collaboration';

@Module({
  imports: [],
  controllers: [HelloWorldHandler],
  providers: [GetHelloWorldCollaboration],
})
export class AppModule {}
