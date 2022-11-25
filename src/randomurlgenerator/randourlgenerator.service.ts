import { Injectable } from '@nestjs/common';

@Injectable()
export class RandomUrlGeneratorService {
    constructor() {}

    async generateUrl(projectName: string){
        const url = `localhost:3000/users/projects/emailinvitation/${projectName}`
        return {projectInvitationLink: url}
    }
}
