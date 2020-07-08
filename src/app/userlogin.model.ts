export class Userlogin {
    public email : string;
    public fullName : string;
    public contact : string;
    public purchases : string;
    public _id : string;


constructor(p_email:string,p_id:string,p_name:string,p_contact:string,p_purchases:string)
    {

        this.email = p_email;
        this.fullName = p_name;
        this.purchases=p_purchases;
        this.contact=p_contact;
        this._id = p_id;

    }

}