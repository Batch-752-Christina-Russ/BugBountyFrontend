export class Role {

    public role_id : number;
    public role_name : string;

    constructor(input_role_id : number, 
                input_role_name : string) {
                    
        this.role_id = input_role_id;
        this.role_name = input_role_name;
    }
}