import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from 'src/schemas/post.schema';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    return new this.postModel(createPostDto).save();
  }

  async findAll() {
    return this.postModel.find();
  }

  findOne(_id: string) {
    return this.postModel.findOne({_id});
  }

  update(_id: string, updatePostDto: UpdatePostDto) {
    return this.postModel.updateOne({_id}, {$set: {...updatePostDto}});
  }

  remove(_id: string) {
    return this.postModel.deleteOne({_id});
  }
}
