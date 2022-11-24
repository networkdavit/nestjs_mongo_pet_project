import { AuthService} from './auth.service';
import { Controller, UseGuards, Post,Get, Body, Param} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto } from './dto/login.dto';

@Controller('users')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(AuthGuard('local'))
  @Post(`/login`)
  async login(@Body() LoginDto: LoginDto) {
    return this.authService.login(LoginDto);
  }

  @UseGuards(AuthGuard('local'))
  @Get(`/projects/emailinvitation/:projectName`)
  async addToProject(@Body() LoginDto: LoginDto, @Param('projectName') projectName: string) {
    return this.authService.addToProject(LoginDto, projectName);
  }
}