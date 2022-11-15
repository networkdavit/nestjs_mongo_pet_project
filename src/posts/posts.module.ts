import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from 'src/schemas/post.schema';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
  RouterModule.register([
    {
      path: 'home',
      module: PostsModule,
    },
  ])],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
