import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { AuthGuard } from '@nestjs/passport';


@Controller('/posts')
@UseGuards(AuthGuard('jwt'))
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  
  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':_id')
  findOne(@Param('_id') _id: string) {
    return this.postsService.findOne(_id);
  }

  @Patch(':_id')
  update(@Param('_id') _id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(_id, updatePostDto);
  }

  @Delete(':_id')
  remove(@Param('_id') _id: string) {
    return this.postsService.remove(_id);
  }
}
