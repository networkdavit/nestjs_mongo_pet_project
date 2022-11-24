import { InjectModel } from "@nestjs/mongoose";
import { HashService } from "src/users/hash.service";
import { Project, ProjectDocument, ProjectSchema } from "src/schemas/project.schema";
import { Injectable } from "@nestjs/common";
import { Model } from 'mongoose';

@Injectable()
export class ProjectInvitationService {

    constructor(@InjectModel(Project.name) private projectModel: Model < ProjectDocument > , private hashService: HashService){}
}