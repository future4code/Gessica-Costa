import { Student } from "./Student"
import { FileManager } from "./FileManager"

const id: string = process.argv[2]
const studentName: string = process.argv[3]
const email: string = process.argv[4]
const birthDay: string = process.argv[5]
const hobbies: string = process.argv[6]

const createStudent = (
    id: string,
    name: string,
    email: string,
    birthDay: string,
    hobbies: string
) => {
    const newStudent: Student = new Student(id, name, email, birthDay, hobbies)

    const fm: FileManager = new FileManager('students.json')
    const file: any = fm.readFile()
    console.log(file)
    file.push(newStudent)
    fm.writeFile(file)
}

createStudent(id, studentName, email, birthDay, hobbies)