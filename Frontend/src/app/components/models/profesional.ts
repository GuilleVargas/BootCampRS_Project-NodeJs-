export class Profesional{

    constructor(_id = '', collegiate_number = 0, name='',surname= '', second_surname ='', gender = '', birth_date = '',nif='',type_of_profesional='', street='', portal_number = 0, door='', postal_code=0,
    city= '') {
        this._id = _id;
        this.collegiate_number = collegiate_number;
        this.name= name;
        this.surname = surname;
        this.second_surname= second_surname;
        this.gender = gender;
        this.birth_date = birth_date;
        this.nif= nif;
        this.type_of_profesional = type_of_profesional;
        this.street = street;
        this.portal_number = portal_number;
        this.door = door;
        this.postal_code = postal_code;
        this.city = city;
        
    }

    _id: string;
    collegiate_number: number;
    name: string;
    surname: string;
    second_surname: string;
    gender: string;
    birth_date: string;
    nif:string;
    type_of_profesional:string;
    street: string;
    portal_number: number;
    door: string;
    postal_code: number;
    city: string;

}