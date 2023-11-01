import { Controller, Get } from '@nestjs/common';
import { GetSecretCollaboration } from '../../application/collaborations/get-secret.collaboration';

@Controller('/secrets')
export class SecretHandler {
  constructor(private readonly collaboration: GetSecretCollaboration) {}

  @Get()
  async run(): Promise<string> {
    return await this.collaboration.run();
  }
}
