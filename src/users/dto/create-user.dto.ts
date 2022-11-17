import { User } from '../entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength, Matches} from 'class-validator';

export class CreateUserDto extends User {
    @Matches('[a-zA-Z\p{L}][a-zA-Z\p{L}\p{P}\p{S}\s]*')
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(25)
    @ApiProperty()
    name: string;

    @Matches('[a-zA-Z\p{L}][a-zA-Z\p{L}\p{P}\p{S}\s]*')
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(25)
    @ApiProperty()
    surname: string;

    @Matches('[a-zA-Z0-9_\.\-]*@[a-zA-Z0-9_\.\-@]*')
    @IsString()
    @IsNotEmpty()
    @MaxLength(60)
    @ApiProperty()
    email: string;

    @Matches('(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\p{L}\p{P}\p{S}0-9]{8,}')
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @ApiProperty()
    password: string;
}