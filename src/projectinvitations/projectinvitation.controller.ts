import { Controller, Get } from '@nestjs/common';

@Controller('/project/invite/')
export class ProjectInvitationController {
    constructor() {}
  
    @Get()
    generateLink(name){
        const email = `http://localhost:3000/project/emailinvitation/${name}`
        return {email: email}
    }
  }
  