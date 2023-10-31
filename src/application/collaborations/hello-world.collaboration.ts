import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { HttpBinGateway } from '../../infrastructure/gateways/http-bin.gateway';

@Injectable()
export class GetHelloWorldCollaboration {
  constructor(private readonly httpBin: HttpBinGateway) {}

  async run(): Promise<string> {
    const data = await firstValueFrom(this.httpBin.getUUID());

    return data.data.uuid;
  }
}
