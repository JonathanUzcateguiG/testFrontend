import { Wand } from "../wand/wand";
import * as moment from 'moment';
import { IPerson } from "../iperson";

export class Staff implements IPerson {
    "name": string;
    "species": string;
    "gender": string;
    "house": string;
    "dateOfBirth": string;
    "yearOfBirth": moment.Moment;
    "ancestry": string;
    "eyeColour": string;
    "hairColour": string;
    "wand": Wand;
    "patronus": string;
    "hogwartsStudent": boolean;
    "hogwartsStaff": boolean;
    "actor": string;
    "alive": boolean;
    "image": string;
}
