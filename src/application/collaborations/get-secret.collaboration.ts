import { Injectable } from '@nestjs/common';

export type Secret = {
  env: string;
};

@Injectable()
export class GetSecretCollaboration {
  async run(): Promise<Secret> {
    const env = process.env.MY_SECRET;

    return {
      env,
    };
  }
}
