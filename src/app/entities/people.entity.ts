import { AddressEntity } from './address.entity';

export class PeopleEntity {
    nomeCompleto: string;
    dataNascimento: string;
    estadoCivil: string;
    celular: string;
    foto: string;
    adresses: AddressEntity[] = [];
    constructor() {
    }
}