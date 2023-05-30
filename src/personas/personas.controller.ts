import { Controller, Get, Param } from '@nestjs/common';
import { PersonasService } from './personas.service';

@Controller('base/api/personas')
export class PersonasController {
constructor( private personasService:PersonasService){}

    @Get("/lista")
    getPersonas(){
        return this.personasService.getPersonas();
    }

    @Get("/:id")
    getPersonaId(@Param("id") id:number){
        return this.personasService.getPersonaId(id);
    }

}
