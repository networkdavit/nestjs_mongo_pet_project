import { Controller, Get, Param } from '@nestjs/common';

@Controller('/project/invite/')
export class ProjectInvitationController {
    constructor() {}
  
    // @Get(':projectName')
    // generateLink(@Param(':projectName') projectName:string){
    //     const email = `http://localhost:3000/project/emailinvitation/${projectName}`
    //     return {email: email}
    // }

    @Get(':projectName')
    generateLink(@Param('projectName') projectName: string) {
        const email = `http://localhost:3000/project/emailinvitation/${projectName}`
        return {email: email}
    }
  }
  