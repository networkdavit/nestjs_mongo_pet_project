import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { ProjectInvitationController } from 'src/projectinvitations/projectinvitation.controller';

@Injectable()
export class EmailsService {
  constructor(private mailerService: MailerService, private projectInvite: ProjectInvitationController) {}

  async sendEmail(createEmailDto: CreateEmailDto): Promise<string> {
    const { email, name } = createEmailDto;
    // const link = this.projectInvite.generateLink();

    const emailSent = await this.mailerService.sendMail({
      to: email,
      subject: 'Project Invitations`',
      text: `http://localhost:3000/users/project/emailinvitation/${name}`,
      context: {
        name,
      },
    });
    return 'success';
  }
}