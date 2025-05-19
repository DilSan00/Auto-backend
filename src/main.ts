import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, BadRequestException } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (errors) => {
        // Форматируем ошибки в читаемый массив
        return new BadRequestException(errors);
      },
    }),
  );

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Auto kg API')
    .setDescription('API for managing auto kg providers')
    .setVersion('1.0')
    .addTag('Auto.KG')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
