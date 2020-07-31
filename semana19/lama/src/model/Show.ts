export class Show {
    constructor(
        private id: string,
        private weekDay: string,
        private startTime: number,
        private endTime: number,
        private bandId: string
    ) { }

    getId = () => this.id

    getWeekDay = () => this.weekDay

    getStartTime = () => this.startTime

    getEndTime = () => this.endTime

    getBandId = () => this.bandId

    setWeekDay = (weekDay: WeekDay) => this.weekDay = weekDay

    setStartTime = (startTime: number) => this.startTime = startTime

    setEndTime = (endTime: number) => this.endTime = endTime

    static stringToWeekDay(input: string): WeekDay {
        switch (input) {
            case "SEXTA":
                return WeekDay.FRIDAY;
            case "SÁBADO":
                return WeekDay.SATURDAY
            case "DOMNGO":
                return WeekDay.SUNDAY
            default:
                throw new Error("Invalid show week day")
        }
    }

    static toShowModel = (show: any): Show =>
        new Show(show.id, Show.stringToWeekDay(show.weekDay), show.startTime, show.endTime, show.bandId)
}

export interface ShowInputDTO {
    weekDay: string,
    startTime: number,
    endTime: number,
    bandId: string
}

export enum WeekDay {
    FRIDAY = "SEXTA",
    SATURDAY = "SÁBADO",
    SUNDAY = "DOMNGO"
}