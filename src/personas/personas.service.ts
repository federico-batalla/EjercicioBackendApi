import { Injectable } from '@nestjs/common';
import { Persona } from './class/persona';

@Injectable()
export class PersonasService {
    private _personas:Persona [];

    constructor(){
        this._personas = [
            {
                dni:34334935,
                nombre:"federico",
                apellido:"batalla",
                domicilio:"antiguis leñadores 51 b",
                edad:34


            }
        ];
    }

    getPersonas (){
        return this._personas
    }


}
