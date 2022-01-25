export class Photo {
    id : number;
    description : string;
    photoUrl : string;
    comment: string = "";
    date: number;
    
    constructor(id : number, des : string, url : string, date: number) {
        this.id = id;
        this.description = des;
        this.photoUrl = url;
        this.date = date;
    }

}
