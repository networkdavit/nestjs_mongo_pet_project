import { Controller, Get, Param} from '@nestjs/common';
import { RandomUrlGeneratorService } from './randourlgenerator.service';

@Controller('invitation')
export class RandomUrlGeneratorController {
  constructor(private readonly randomUrlGeneratorService : RandomUrlGeneratorService) {}
  @Get(`/project/url/:projectName`)
  async generateUrl(@Param('projectName') projectName: string) {
    return  this.randomUrlGeneratorService.generateUrl(projectName);
  }
}