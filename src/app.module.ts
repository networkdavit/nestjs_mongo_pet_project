import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';


dotenv.config()
const MONGO_URL = process.env.MONGO_URL;
console.log(MONGO_URL)

@Module({
  imports: [MongooseModule.forRoot(MONGO_URL),
  PostsModule,
  ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
