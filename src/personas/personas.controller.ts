import { Controller, Get } from '@nestjs/common';
import { PersonasService } from './personas.service';

@Controller('base/api/personas')
export class PersonasController {
constructor( private personasService:PersonasService){}

    @Get("/lista")
    getPersonas(){
        return this.personasService.getPersonas();
    }


}
