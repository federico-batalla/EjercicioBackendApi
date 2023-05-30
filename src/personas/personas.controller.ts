import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { Persona } from './class/persona';

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

    @Delete("/:id")
    eliminarPersonaId(@Param("id") id:number){
        return this.personasService.eliminarPersonaId(id);
    }

    @Post("/agregar")
    agregarPersona(@Body()persona:Persona){
        return this.personasService.agregarPersona(persona);
    }
}
