import { Teacher } from "./Teacher";
import { Specialities } from "./Enums";
import { Student } from "./Student";
import { Mission } from "./Mission";

const newTeacher: Teacher = new Teacher("1", "Maria", "maria@gmail.com", Specialities.REACT)
const newStudent: Student = new Student("2", "Géssica", "gessica@gmail.com", "13/06/1993", "Asistir séries")
const newMission: Mission = new Mission("3", "Bouman", "05/07/2020", "05/01/2021", [newTeacher], [newStudent], "2")

console.log(newTeacher)
console.log(newStudent)
console.log(newMission)

