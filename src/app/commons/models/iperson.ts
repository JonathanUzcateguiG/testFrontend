import * as moment from 'moment';

import { IWand } from "./iwand";

export interface IPerson {
    name: string;
    species: string;
    gender: string;
    house: string;
    dateOfBirth: string;
    yearOfBirth: moment.Moment;
    ancestry: string;
    eyeColour: string;
    hairColour: string;
    wand: IWand;
    patronus: string;
    hogwartsStudent: boolean;
    hogwartsStaff: boolean;
    actor: string;
    alive: boolean;
    image: string;
}