import { Controller, Get } from '@nestjs/common';
import { TestThrottlerCollaboration } from '../../application/collaborations/test-throttler.collaboration';
import { Throttle } from '@nestjs/throttler';

@Throttle({ default: { limit: 2, ttl: 100 * 1000 } })
@Controller('/throttler')
export class ThrottlerHandler {
  constructor(private readonly collaboration: TestThrottlerCollaboration) {}

  @Get()
  async run(): Promise<string> {
    return await this.collaboration.run();
  }
}
