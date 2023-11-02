import { Injectable } from '@nestjs/common';

@Injectable()
export class TestThrottlerCollaboration {
  async run(): Promise<string> {
    return 'ok';
  }
}
