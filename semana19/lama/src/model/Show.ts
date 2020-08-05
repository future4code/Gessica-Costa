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

    setWeekDay = (weekDay: string) => this.weekDay = weekDay

    setStartTime = (startTime: number) => this.startTime = startTime

    setEndTime = (endTime: number) => this.endTime = endTime

    static toShowModel = (show: any): Show =>
        new Show(show.id, show.weekDay, show.startTime, show.endTime, show.bandId)
}

export interface ShowInputDTO {
    weekDay: string,
    startTime: number,
    endTime: number,
    bandId: string
}