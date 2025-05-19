import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AutoService } from './auto.service';
import { AutoResponseDto } from './dto/auto-response.dto';
import { CreateAutoDto } from './dto/create-auto';

@ApiTags('Auto')
@Controller('auto')
export class AutoController {
  constructor(private readonly autoService: AutoService) {}

  @Get()
  @ApiOperation({ summary: 'Получить все машины' })
  @ApiResponse({
    status: 200,
    description: 'Список Машин',
    type: [AutoResponseDto],
  })
  async getAll() {
    return this.autoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить машину по ID' })
  @ApiResponse({
    status: 200,
    description: 'Одна машина',
    type: AutoResponseDto,
  })
  async getById(@Param('id') id: string) {
    return this.autoService.findById(id);
  }

  @Post()
  async create(@Body() dto: CreateAutoDto) {
    return this.autoService.create(dto);
  }
}
