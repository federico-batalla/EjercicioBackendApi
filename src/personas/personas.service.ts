import { Injectable } from '@nestjs/common';
import { Persona } from './class/persona';

@Injectable()
export class PersonasService {
    private _personas:Persona [];

    constructor(){
        this._personas = [];
    }

    getPersonas (){
        return this._personas;
    }

    getPersonaId(id:number){
        let personaEcontrada = this._personas.find(n => n.id == id);
        if(!personaEcontrada){
            return false
        }
        let personaEncontradaIndex = this._personas.findIndex(n => n.id == id);
        return this._personas[personaEncontradaIndex]
    }

    eliminarPersonaId(id:number){
        let personaEcontrada = this._personas.find(n => n.id == id);
        if(!personaEcontrada){
            return false
        }
        let personaEncontradaIndex = this._personas.findIndex(n => n.id == id);
        this._personas.splice(personaEncontradaIndex,1);
        return true
    
    }

    agregarPersona(persona){
        this._personas.push(persona);
        return true
    }

}
