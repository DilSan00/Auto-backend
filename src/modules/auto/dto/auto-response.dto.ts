import { ApiProperty } from '@nestjs/swagger';

export class AutoResponseDto {
  @ApiProperty({ example: '661f3a293abc1e23b6789012' })
  _id: string;

  @ApiProperty({ example: 'Tayota' })
  mark: string;

  @ApiProperty({ example: 'Camry' })
  model: string;

  @ApiProperty({ example: 900000 })
  price: number;

  @ApiProperty({ example: 'image.jpg' })
  image: string;

  @ApiProperty({ example: 199333 })
  mileage: number;

  @ApiProperty({ example: 2004 })
  year: number;

  @ApiProperty({ example: 'Бишкек, Кыргызстан' })
  location: string;

  @ApiProperty({ example: 'Автомат' })
  gearbox: string;

  @ApiProperty({ example: '2.4 бензин' })
  engine: string;

  @ApiProperty({ example: 'KGS' })
  currency: string;

  @ApiProperty({ example: '+996 707 123 456' })
  ownerPhone: string;

  @ApiProperty({ example: 'Передний привод' })
  driveType: string;

  @ApiProperty({ example: 'Седан' })
  bodyType: string;
}
