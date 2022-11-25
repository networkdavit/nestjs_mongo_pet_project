import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { EmailsService } from './emails.service';
import { CreateEmailDto } from './dto/create-email.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('emails')
export class EmailsController {
  constructor(private emailsService: EmailsService) {}

  @Post('/user/personal/invitation')
  async sendEmail(@Body() createEmailDto: CreateEmailDto): Promise<string> {
    return this.emailsService.sendEmail(createEmailDto);
  }
}