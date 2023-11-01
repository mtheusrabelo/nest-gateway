import { Injectable } from '@nestjs/common';
import { Config } from 'sst/constructs';

export type Secret = {
  env: string;
  config: string;
};

@Injectable()
export class GetSecretCollaboration {
  async run(): Promise<Secret> {
    const env = process.env.MY_SECRET;
    const config = Config['MY_SECRET'];

    return {
      env,
      config,
    };
  }
}
