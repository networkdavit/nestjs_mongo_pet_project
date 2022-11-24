import { Module} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UsersController} from '../users/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema} from '../schemas/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/strategy/constants';
import { HashService } from 'src/users/hash.service';
import { AuthService } from 'src/auth/auth.service';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import { LocalStrategy } from 'src/strategy/local.strategy';
import { Project, ProjectSchema } from 'src/schemas/project.schema';

@Module({
  imports: [
   MongooseModule.forFeature([{
      name: User.name,
      schema: UserSchema
    }]),
    MongooseModule.forFeature([{
      name: Project.name,
      schema: ProjectSchema
    }]),
   JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '60d'
      },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, HashService, AuthService, JwtStrategy, LocalStrategy],
})
export class UserModule {}