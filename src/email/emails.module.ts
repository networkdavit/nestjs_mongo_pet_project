import { Module } from '@nestjs/common';
import { EmailsService } from './emails.service';
import { EmailsController } from './emails.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProjectInvitationController } from 'src/projectinvitations/projectinvitation.controller';

const from_email = process.env.FROM_EMAIL;
const email_password = process.env.EMAIL_PASSWORD;

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          service: 'gmail',
          auth: {
            user: from_email,
            pass: email_password
          },
        }
      }),
    }),
  ],
  controllers: [EmailsController],
  providers: [EmailsService, ProjectInvitationController],
})
export class EmailsModule {}