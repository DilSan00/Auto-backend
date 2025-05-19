import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  Min,
} from 'class-validator';

export class CreateAutoDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Поле обязательно для заполнения' })
  @IsString({ message: 'Поле должно быть строкой' })
  mark: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Поле обязательно для заполнения' })
  @IsString({ message: 'Поле должно быть строкой' })
  model: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Поле обязательно для заполнения' })
  @Type(() => Number)
  @IsNumber({}, { message: 'Поле должно быть числом' })
  @Min(1, { message: 'Цена должна быть больше 0' })
  price: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'Поле обязательно для заполнения' })
  @IsString({ message: 'Поле должно быть строкой' })
  image: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Поле обязательно для заполнения' })
  @Type(() => Number)
  @IsNumber({}, { message: 'Поле должно быть числом' })
  mileage: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'Поле обязательно для заполнения' })
  @Type(() => Number)
  @IsNumber({}, { message: 'Поле должно быть числом' })
  year: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'Поле обязательно для заполнения' })
  @IsString({ message: 'Поле должно быть строкой' })
  location: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Поле обязательно для заполнения' })
  @IsString({ message: 'Поле должно быть строкой' })
  gearbox: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Поле обязательно для заполнения' })
  @IsString({ message: 'Поле должно быть строкой' })
  engine: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Поле обязательно для заполнения' })
  @IsString({ message: 'Поле должно быть строкой' })
  currency: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Поле обязательно для заполнения' })
  @IsPhoneNumber('KG', { message: 'Некорректный номер телефона' })
  ownerPhone: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Поле обязательно для заполнения' })
  @IsString({ message: 'Поле должно быть строкой' })
  driveType: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Поле обязательно для заполнения' })
  @IsString({ message: 'Поле должно быть строкой' })
  bodyType: string;
}
