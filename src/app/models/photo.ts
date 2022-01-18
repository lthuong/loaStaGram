export class Photo {
    id : number;
    description : string;
    photoUrl : string;
    
    constructor(id : number, des : string, url : string) {
        this.id = id;
        this.description = des;
        this.photoUrl = url;
    }

}
