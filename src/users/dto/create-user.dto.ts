import { User } from '../entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength, Matches} from 'class-validator';

export class CreateUserDto extends User {
    @Matches('^[A-Za-z]+$')
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(25)
    @ApiProperty()
    name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(25)
    @ApiProperty()
    surname: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(60)
    @ApiProperty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @ApiProperty()
    password: string;
}