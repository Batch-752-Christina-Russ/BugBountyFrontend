import { Role } from './Role';

export class Users {

    public users_id : number;
    public username : string;
    public password : string;
    public points : number;
    public role : Role;

    constructor(input_user_id : number, 
                input_username : string, 
                input_password : string, 
                input_points : number, 
                input_role : Role) {
                    
        this.users_id = input_user_id;
        this.username = input_username;
        this.password = input_password;
        this.points = input_points;
        this.role = input_role;
    }

}