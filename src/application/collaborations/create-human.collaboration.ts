import { Injectable } from '@nestjs/common';
import { CreateHumanDto } from './create-human.dto';

@Injectable()
export class CreateHumanCollaboration {
  constructor() {}

  async run(human: CreateHumanDto): Promise<string> {
    return human.name;
  }
}
