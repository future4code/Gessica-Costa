import * as fs from 'fs'

// const fileName: string = process.argv[2]
// const newTask: string = process.argv[3];

// tarefas.txt
function createTask(fileName: string, newTask: string): void {
    // const fileBuffer: Buffer = fs.readFileSync(fileName)
    // const fileText: string = fileBuffer.toString()
    // const tasks: string[] = JSON.parse(fileText)

    // tasks.push(newTask)
    fs.appendFileSync(fileName, newTask)
    // const updateTasks: string = JSON.stringify(tasks)
    // fs.writeFileSync(fileName, newTask)
    // console.log(updateTasks)
    console.log('Tarefa criada com sucesso!')
}

createTask(process.argv[2], process.argv[3])