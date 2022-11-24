import { Module } from '@nestjs/common';
import { ProjectInvitationController } from './projectinvitation.controller';
import { Project, ProjectSchema } from 'src/schemas/project.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{
       name: Project.name,
       schema: ProjectSchema
     }]),
   ],
  controllers: [ProjectInvitationController],
})
export class ProjectInvirationModule {}
