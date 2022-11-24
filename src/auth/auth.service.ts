import { UsersService } from 'src/users/users.service';
import { Injectable} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { HashService} from 'src/users/hash.service';
import { Model } from 'mongoose';
import { Project, ProjectDocument } from 'src/schemas/project.schema';
import { InjectModel } from '@nestjs/mongoose';
  
@Injectable()
export class AuthService {
  constructor(private userService: UsersService,
    private hashService: HashService,
    private jwtService: JwtService,
    @InjectModel(Project.name)
    private projectModel: Model<ProjectDocument>) {}

  async validateUser(email: string, pass: string): Promise < any > {
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

  async addToProject(user: any, projectName: string){
    const email = user.email;
    const pendingUser = await this.userService.getUserByEmail(email);
    const memberId = pendingUser.id;
    const memberEmail =pendingUser.email;
    const memberName = pendingUser.name;
    const memberSurname = pendingUser.surname;
    const project = projectName;
    const userAddedData = {
      projectName: project,
      members: 0,
      memberId: memberId,
      memberEmail: memberEmail,
      memberName: memberName,
      memberSurname: memberSurname
    }
   
    return await new this.projectModel(userAddedData).save()


    
  }
}