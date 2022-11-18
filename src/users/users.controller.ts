import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { UsersService} from './users.service';
import { CreateUserDto} from './dto/create-user.dto';
import { AuthGuard} from '@nestjs/passport';

@Controller('/users')
export class UsersController {

  constructor(private readonly userService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('username')
  getUserByEmail(@Param() param) {
    return this.userService.getUserByEmail(param.email);
  }
  @Post('register')
  registerUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.registerUser(createUserDto);
  }
}
