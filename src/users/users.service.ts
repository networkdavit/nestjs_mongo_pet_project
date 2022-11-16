import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { HashService } from './hash.service';
import { User, UserDocument} from '../schemas/user.schema'

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
    // validate DTO

    const createUser = new this.userModel(createUserDto);
    // check if user exists
    const user = await this.getUserByEmail(createUser.email);
    if (user) {
      throw new BadRequestException();
    }
    // Hash Password
    createUser.password = await this.hashService.hashPassword(createUser.password);

    return createUser.save();
  }
}