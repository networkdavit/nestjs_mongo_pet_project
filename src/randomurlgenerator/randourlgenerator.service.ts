import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { v4 as uuid } from 'uuid';
import { Model } from 'mongoose';
import { Post, PostDocument } from 'src/schemas/post.schema';

@Injectable()
export class RandomUrlGeneratorService {
    constructor() {}

    async generateUrl(){
        const randomId = uuid()
        const url = `localhost:3000/project/invite/${randomId}`
        return {projectInvitationLink: url}
    }
}
