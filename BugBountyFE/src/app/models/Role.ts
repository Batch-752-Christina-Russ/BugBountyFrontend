export class Role {

    public id : number;
    public name : string;

    constructor(input_role_id : number, 
                input_role_name : string) {
                    
        this.id = input_role_id;
        this.name = input_role_name;
    }

}