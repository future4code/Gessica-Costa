import * as fs from "fs";

export class FileManager {
    constructor(private filePath: string) { }

    public setFilePath(path: string): void {
        this.filePath = path;
    }

    public writeFile(data: any): void {
        fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
    }

    public readFile(): any {
        const data: string = String(fs.readFileSync(this.filePath));
        return data ? JSON.parse(data) : [];
    }
}