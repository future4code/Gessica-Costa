import { Teacher } from "./Teacher";
import { Student } from "./Student";
import { Mission } from "./Mission";
import { FileManager } from "./FileManager";

const createMission = (
    id: string,
    name: string,
    startDate: string,
    endDate: string,
    teachers: Teacher[],
    students: Student[],
    module: string
) => {
    const newMission: Mission = new Mission(id, name, startDate, endDate, teachers, students, module)

    const fm: FileManager = new FileManager('missions.json')
    const file: any = fm.readFile()
    file.push(newMission)
    fm.writeFile
}

const fmStudent: any = (new FileManager('students.json')).readFile()
console.log(fmStudent)

const filterStudent = fmStudent.filter((student: any) => (student.hobbies === 'Assistir filmes'))
console.log(filterStudent)

// createMission("1", "Julian", "13/03/2020", "13/09/2020", teacher, students, "2")