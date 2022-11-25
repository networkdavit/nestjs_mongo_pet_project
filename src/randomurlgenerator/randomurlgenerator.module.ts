import { Module} from '@nestjs/common';
import { RandomUrlGeneratorController } from './randomurlgenerator.controller';
import { RandomUrlGeneratorService } from './randourlgenerator.service';

@Module({
  imports:[],
  controllers: [RandomUrlGeneratorController],
  providers:[RandomUrlGeneratorService]
})

export class RandomUrlGeneratorModule {}