import { Injectable } from '@nestjs/common';

@Injectable()
export class GetSecretCollaboration {
  async run(): Promise<string> {
    const secret = process.env.MY_SECRET;

    return `MY_SECRET: ${secret}`;
  }
}
