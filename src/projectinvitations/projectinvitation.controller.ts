import { Controller, Post, Param } from '@nestjs/common';

@Controller('/project/invite/')
export class ProjectInvitationController {
    constructor() {}
    
    @Post(':projectName')
    generateLink(@Param('projectName') projectName: string) {
        const email = `http://localhost:3000/users/project/emailinvitation/${projectName}`
        return {email: email}
    }
  }
  