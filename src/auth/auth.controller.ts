import { AuthService} from './auth.service';
import { Controller, Request, UseGuards, Post, Body} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(AuthGuard('local'))
  @Post(`/login`)
  async login(@Body() LoginDto: LoginDto) {
    return this.authService.login(LoginDto);
  }
}