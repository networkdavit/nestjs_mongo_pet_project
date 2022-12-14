import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { HashService } from './hash.service';
import { User, UserDocument} from '../schemas/user.schema';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model < UserDocument > , private hashService: HashService) {}

  async getUserByEmail(email: string) {
    return this.userModel.findOne({
        email
      })
      .exec();
  }

  async registerUser(createUserDto: CreateUserDto) {

    const createUser = new this.userModel(createUserDto);
    const user = await this.getUserByEmail(createUser.email);
    if (user) {
      throw new BadRequestException();
    }
    createUser.password = await this.hashService.hashPassword(createUser.password);

    return createUser.save();
  }
}