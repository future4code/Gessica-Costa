import * as moment from "moment"

moment.locale("pt-br")

// Exercício 1

export type event = {
    name: string,
    description: string,
    initialDate: moment.Moment,
    endDate: moment.Moment
}

const reunion: event = {
    name: "Reunião",
    description: "Reunião formal para todos.",
    initialDate: moment("30/06/2020 15:00", "DD/MM/YYYY HH:mm"),
    endDate: moment("30/06/2020 16:00", "DD/MM/YYYY HH:mm")
}

const littleReunion: event = {
    name: "Reuniãozinha",
    description: "Pequena reunião para todos.",
    initialDate: moment("28/06/2020 9:30", "DD/MM/YYYY HH:mm"),
    endDate: moment("28/06/2020 10:00", "DD/MM/YYYY HH:mm")
}

export const events: event[] = [reunion, littleReunion]

// Exercício 2
//a)
export function informations(
    eventArray: event[]
): void {
    eventArray.map(event => {
        console.log("Nome: ", event.name,
            "\nHorário de inicio: ", event.initialDate.format("DD [de] MMMM [de] YYYY, HH:mm"),
            "\nHorário de fim: ", event.endDate.format("DD [de] MMMM [de] YYYY, HH:mm"),
            "\nDescrição: ", event.description, "\n"
        )
    })
}

informations(events)

// b) Seria necessário adicionar 3 horas aos horários de início e fim.
events.map(event => {
    console.log(event.initialDate.add(3, "hours"))
    console.log(event.endDate.add(3, "hours"))
})