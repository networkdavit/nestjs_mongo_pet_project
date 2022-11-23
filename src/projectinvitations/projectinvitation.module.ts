import { Module } from '@nestjs/common';
import { ProjectInvitationController } from './projectinvitation.controller';

@Module({

  controllers: [ProjectInvitationController],
})
export class ProjectInvirationModule {}
