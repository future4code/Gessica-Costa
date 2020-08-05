export class Band {
    constructor(
        private id: string,
        private name: string,
        private musicGenre: string,
        private responsible: string
    ) { }

    getId = () => this.id

    getName = () => this.name

    getMusicGenre = () => this.musicGenre

    getResponsible = () => this.responsible

    setId = (id: string) => this.id = id

    setName = (name: string) => this.name = name

    setMusicGenre = (musicGenre: string) => this.musicGenre = musicGenre

    setResponsible = (responsible: string) => this.responsible = responsible

    static toBandModel = (band: any): Band =>
        new Band(band.id, band.name, band.musicGenre, band.responsible)
}

export interface BandInputDTO {
    name: string,
    musicGenre: string,
    responsible: string
}