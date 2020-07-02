import { MainData } from "./MainData";
import { Email } from "./Email";

export class Teacher extends MainData implements Email {
    constructor(
        protected id: string,
        protected name: string,
        public email: string,
        protected speciality: string
    ) {
        super(id, name)
    }
}