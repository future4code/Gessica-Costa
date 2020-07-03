import { Specialities } from "./Enums"
import { Teacher } from "./Teacher"
import { FileManager } from "./FileManager"

const createTeacher = (
    id: string,
    name: string,
    email: string,
    speciality: Specialities
) => {
    const newTeacher: Teacher = new Teacher(id, name, email, speciality)

    const fm: FileManager = new FileManager('teachers.json')
    const file: any = fm.readFile()
    file.push(newTeacher)
    fm.writeFile(file)
}

const recive: string =process.argv[5]
let specialities

switch (recive) {
    case "Backend":
        specialities = Specialities.BACKEND
        break
    case "CSS":
        specialities = Specialities.CSS
        break
    case "Redux":
        specialities = Specialities.REDUX
        break
    case "Testes":
        specialities = Specialities.TESTES
        break
    case "Typescript":
        specialities = Specialities.TYPESCRIPT
        break
    case "POO":
        specialities = Specialities.POO
        break
    default:
        specialities = Specialities.REACT
}

createTeacher(
    process.argv[2],
    process.argv[3],
    process.argv[4],
    specialities
)