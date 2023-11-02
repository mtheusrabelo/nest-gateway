import { IsInt, IsString, Min, MaxLength } from 'class-validator';

export class CreateHumanDto {
  @IsString()
  @MaxLength(100)
  name: string;

  @IsInt()
  @Min(0)
  age: number;
}
