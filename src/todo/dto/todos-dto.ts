import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsEnum } from 'class-validator';
import { EStatus } from '../status.enum';
import { Type } from 'class-transformer';

export class CreateTodoDto {
  @ApiProperty({
    description: 'The title of the todo item',
    example: 'Finish project documentation',
  })
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'The description of the todo item',
    example: 'Complete the documentation for the project by end of the week',
  })
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'The deadline for the todo item',
    example: '2024-09-15T12:00:00Z',
  })
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  deadline: Date;

  @ApiProperty({
    description: 'The status of the todo item',
    example: EStatus.PENDING,
    default: EStatus.PENDING,
  })
  @IsEnum(EStatus)
  status: EStatus;
}
