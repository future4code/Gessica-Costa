import * as moment from "moment"

const today = moment()

type event = {
    name: string,
    initialDate: moment.Moment,
    endDate: moment.Moment
}

const reunion: event = {
    name: "Reunião",
    initialDate: moment("24/06/2020 15:00", "DD/MM/YYYY HH:mm"),
    endDate: moment("24/06/2020 16:00", "DD/MM/YYYY HH:mm")
}
const littleReunion: event = {
    name: "Reuniãozinha",
    initialDate: moment("24/06/2020 9:30", "DD/MM/YYYY HH:mm"),
    endDate: moment("24/06/2020 10:00", "DD/MM/YYYY HH:mm")
}

let events: event[] = [reunion, littleReunion]
console.log(events)