import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { AutoModule } from './modules/auto/auto.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    AutoModule,
    MongooseModule.forRoot('mongodb://localhost:27017/auto'),
  ],
})
export class AppModule {}
