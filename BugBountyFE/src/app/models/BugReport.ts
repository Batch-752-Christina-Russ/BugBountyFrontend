import { User } from './User';

export class BugReport{

id : number;
reporter : User;
resolver : User;
application : string;
location: string;
description : string;
steps : string;
severity : string;
date : Date;
status : string;

constructor(input_report_id : number, 
            input_reporter : User, 
            input_resolver : User,
            input_applicationName : string,  
            input_location : string,
            input_description : string,
            input_stepsToReproduce : string,
            input_severity : string,
            input_submissionDate : Date,
            input_status : string) {

    this.id = input_report_id;
    this.application = input_applicationName;
    this.reporter = input_reporter;
    this.resolver = input_resolver;
    this.location = input_location;
    this.date = input_submissionDate;
    this.steps = input_stepsToReproduce;
    this.description = input_description;
    this.severity = input_severity;
    this.status = input_status;

}

}