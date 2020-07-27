import { MainData } from "./MainData";
import { Email } from "./Email";
import { Specialities } from "./Enums";

export class Teacher extends MainData implements Email {
    constructor(
        protected id: string,
        protected name: string,
        public email: string,
        protected speciality: Specialities
    ) {
        super(id, name)
    }
}