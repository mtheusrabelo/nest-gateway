import { Injectable } from '@nestjs/common';

@Injectable()
export class GetHelloWorldCollaboration {
  run(): string {
    return 'Hello World!';
  }
}
