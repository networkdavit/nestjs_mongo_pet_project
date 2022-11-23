import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailsService {
  constructor(private mailerService: MailerService) {}

  async sendEmail(createEmailDto: CreateEmailDto): Promise<string> {
    const { email, name } = createEmailDto;

    const emailSent = await this.mailerService.sendMail({
      to: email,
      subject: 'Project Invitations`',
      context: {
        name,
      },
    });
    console.log(emailSent);
    return 'success';
  }
}