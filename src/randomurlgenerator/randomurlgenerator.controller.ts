import { Controller, Get, Param, UseGuards} from '@nestjs/common';
import { RandomUrlGeneratorService } from './randourlgenerator.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('invitation')
export class RandomUrlGeneratorController {
  constructor(private readonly randomUrlGeneratorService : RandomUrlGeneratorService) {}
  @Get(`/project/url/:projectName`)
  async generateUrl(@Param('projectName') projectName: string) {
    return  this.randomUrlGeneratorService.generateUrl(projectName);
  }
}