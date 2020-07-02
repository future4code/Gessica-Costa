import { MainData } from "./MainData";
import { Teacher } from "./Teacher";
import { Student } from "./Student";

export class Mission extends MainData {
    constructor(
        protected id: string,
        protected name: string,
        private startDate: string,
        private endDate: string,
        private teachers: Teacher,
        private students: Student,
        private module: string
    ) {
        super(id, name)
    }
}