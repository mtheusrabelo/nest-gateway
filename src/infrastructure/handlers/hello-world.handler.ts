import { Controller, Get } from '@nestjs/common';
import { GetHelloWorldCollaboration } from '../../application/collaborations/hello-world.collaboration';

@Controller()
export class HelloWorldHandler {
  constructor(private readonly collaboration: GetHelloWorldCollaboration) {}

  @Get()
  run(): string {
    return this.collaboration.run();
  }
}
