import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProjectDocument =  Project & Document;

@Schema()
export class Project {
  @Prop()
  projectName: string;

  @Prop()
  members: number;

  @Prop()
  memberId: string;

  @Prop()
  memberEmail: string;
  
  @Prop()
  memberName: string;

  @Prop()
  memberSurname: string;

}

export const ProjectSchema = SchemaFactory.createForClass(Project);