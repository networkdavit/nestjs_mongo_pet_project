import { UsersService } from 'src/users/users.service';
import { Injectable} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { HashService} from 'src/users/hash.service';
  
@Injectable()
export class AuthService {
  constructor(private userService: UsersService,
    private hashService: HashService,
    private jwtService: JwtService) {}

  async validateUser(email: string, pass: string): Promise < any > {
    console.log(email)
    const user = await this.userService.getUserByEmail(email);
    if (user && (await this.hashService.comparePassword(pass, user.password))) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = {
      email: user.email,
      sub: user.id
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}