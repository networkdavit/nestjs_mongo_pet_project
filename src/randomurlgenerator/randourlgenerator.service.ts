import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Injectable()
export class RandomUrlGeneratorService {
    constructor() {}

    async generateUrl(projectName: string){
        const randomId = uuid()
        const url = `localhost:3000/invitation/project/url/${projectName}/${randomId}`
        return {projectInvitationLink: url}
    }
}
