import { Module } from '@nestjs/common';
import { PersonasController } from './personas.controller';
import { PersonasService } from './personas.service';

@Module({
  imports: [PersonasModule],
  controllers: [PersonasController],
  providers: [PersonasService]
})
export class PersonasModule {}
