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
    MongooseModule.forRoot(
      process.env.MONGO_URI ||
        'mongodb+srv://DilSan:smodsmod@cluster0.xo3knu1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
  ],
})
export class AppModule {}
