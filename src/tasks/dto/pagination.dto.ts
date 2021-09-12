import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsNumber()
  readonly skip?: number;

  @IsOptional()
  @IsNumber()
  readonly limit?: number;
}
