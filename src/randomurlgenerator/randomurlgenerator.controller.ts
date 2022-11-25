import { Controller, Get} from '@nestjs/common';
import { RandomUrlGeneratorService } from './randourlgenerator.service';

@Controller('invitation')
export class RandomUrlGeneratorController {
  constructor(private readonly randomUrlGeneratorService : RandomUrlGeneratorService) {}
  @Get(`/project/url/:project`)
  async generateUrl() {
    return  this.randomUrlGeneratorService.generateUrl();
  }

//   @UseGuards(AuthGuard('local'))
//   @Get(`/projects/emailinvitation/:projectName`)
//   async addToProject(@Body() LoginDto: LoginDto, @Param('projectName') projectName: string) {
//     return this.authService.addToProject(LoginDto, projectName);
//   }
}