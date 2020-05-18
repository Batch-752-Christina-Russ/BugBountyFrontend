import { Role } from './Role';

export class User {

    public id : number;
    public username : string;
    public password : string;
    public points : number;
    public role : Role;

    constructor(input_id : number, 
                input_username : string, 
                input_password : string, 
                input_points : number, 
                input_role : Role) {
                    
        this.id = input_id;
        this.username = input_username;
        this.password = input_password;
        this.points = input_points;
        this.role = input_role;
    }

}