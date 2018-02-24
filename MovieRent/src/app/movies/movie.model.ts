export class movie{
    public name:string;
    public discription:string;
    public imagepath:string;
    public yearofrelease:number;
    public rating:number;
    public additionaldetails:string;
    public type:string;

constructor(name:string,discription:string,imagepath:string,yearofrelease:number,rating:number,additionaldetails:string,type:string){
    this.name=name;
    this.discription=discription;
    this.imagepath=imagepath;
    this.yearofrelease=yearofrelease;
    this.rating=rating;
    this.additionaldetails=additionaldetails;
    this.type=type;
}
}
