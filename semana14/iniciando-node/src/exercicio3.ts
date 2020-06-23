import * as fs from 'fs'

const data: string = process.argv[2];
const fileName: string = "tarefas.txt"

try {
    fs.writeFileSync(fileName, data)
    console.log('Tarefa criada com sucesso!')
} catch (err) {
    console.log(err)
}