import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/users.module';
import { EmailsModule } from './email/emails.module';
import { ProjectInvirationModule } from './projectinvitations/projectinvitation.module';
import { RandomUrlGeneratorModule } from './randomurlgenerator/randomurlgenerator.module';
import * as dotenv from 'dotenv';


dotenv.config()
// const MONGO_URL = process.env.MONGO_URL;
const MONGO_LOCAL_URL = process.env.MONGO_LOCAL_URL;

@Module({
  imports: [MongooseModule.forRoot(MONGO_LOCAL_URL),
  PostsModule,
  AuthModule,
  UserModule,
  EmailsModule,
  ProjectInvirationModule,
  RandomUrlGeneratorModule,
  ConfigModule.forRoot(),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
