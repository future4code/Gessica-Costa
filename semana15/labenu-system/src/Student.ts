import { MainData } from "./MainData";
import { Email } from "./Email";

export class Student extends MainData implements Email {
    constructor(
        protected id: string,
        protected name: string,
        public email: string,
        protected birthDay: string,
        protected hobbies: string
    ) {
        super(id, name)
    }
}