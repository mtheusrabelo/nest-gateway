import { Body, Controller, Post } from '@nestjs/common';
import { CreateHumanCollaboration } from '../../application/collaborations/create-human.collaboration';
import { CreateHumanDto } from '../../application/collaborations/create-human.dto';

@Controller('/humans')
export class HumansHandler {
  constructor(private readonly collaboration: CreateHumanCollaboration) {}

  @Post()
  async create(@Body() human: CreateHumanDto): Promise<string> {
    return await this.collaboration.run(human);
  }
}
