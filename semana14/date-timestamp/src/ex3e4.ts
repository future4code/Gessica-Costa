import * as moment from 'moment'
import { event, events } from "./ex1e2"

// Exercício 3

const today = moment()

function otherInformations(
    array: event[]
): void {
    events.map(event => {
        console.log("Nome: ", event.name,
            "\nHorário de inicio: ", event.initialDate.format("DD [de] MMMM [de] YYYY, HH:mm"),
            "\nHorário de fim: ", event.endDate.format("DD [de] MMMM [de] YYYY, HH:mm"),
            "\nDescrição: ", event.description,
            "\nDuração: ", event.endDate.diff(event.initialDate, "minutes"), "minutos.",
            "\nDias até o evento: ", event.initialDate.diff(today, "days"), "\n")
    })
}

//console.log(otherInformations(events))

// Exercício 4
const newEventName: string = process.argv[2]
const newEventDescription: string = process.argv[3]
const newInitialDateDay: moment.Moment = moment(process.argv[4], "DD MM YYYY HH:mm")
const newEndDateDay: moment.Moment = moment(process.argv[5], "DD MM YYYY HH:mm")

const newEvent: event = {
    name: newEventName,
    description: newEventDescription,
    initialDate: newInitialDateDay,
    endDate: newEndDateDay
}

function createNewEvent(
    newEvent: event
): void {
    if (newEvent.initialDate.diff(today, "day") > 0 &&
        newEvent.endDate.diff(today, "day") > 0) {
        newEvent.name && newEvent.description &&
            newEvent.initialDate.isValid() && newEvent.endDate.isValid() ?
            events.push(newEvent) : console.log("Campo vazio")
    } else {
        console.log("Você tentou cadastrar um evento com data anterior a hoje, tente novamente.")
    }
    console.log(events)
}

createNewEvent(newEvent)