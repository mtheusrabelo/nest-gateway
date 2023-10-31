import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

type UUID = {
  uuid: string;
};

@Injectable()
export class HttpBinGateway {
  baseUrl = 'https://httpbin.org';

  constructor(private readonly httpService: HttpService) {}

  getUUID(): Observable<AxiosResponse<UUID>> {
    return this.httpService.get(`${this.baseUrl}/uuid`);
  }
}
