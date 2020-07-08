import {Subcat} from './Subcat.model';
export class Category
{
    public _id? : string
    public id1? : string
    public name : string;
    public subcat: [Subcat];
    // public image :string;
   


    constructor(p_name:string,p_id1:string)
    {

        this.name = p_name;
        this.id1 = p_id1;
        // this.image=p_image;
    }
}