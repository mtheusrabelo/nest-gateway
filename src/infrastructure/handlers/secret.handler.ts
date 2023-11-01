import { Controller, Get } from '@nestjs/common';
import {
  GetSecretCollaboration,
  Secret,
} from '../../application/collaborations/get-secret.collaboration';

@Controller('/secrets')
export class SecretHandler {
  constructor(private readonly collaboration: GetSecretCollaboration) {}

  @Get()
  async run(): Promise<Secret> {
    return await this.collaboration.run();
  }
}
