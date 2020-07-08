export class subCategory
{
    public _id? : string
    public name : string;
    public sub: string;
    public image :string;
   


    constructor(p_name:string,p_sub:string,p_image:string)
    {

        this.name = p_name;
        this.sub=p_sub;
        this.image=p_image;
    }
}