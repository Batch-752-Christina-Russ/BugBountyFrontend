export class BugReport{

report_id : number;
applicationName : string;
reporter : number;
resolver : number;
location: string;
submissionDate : Date;
stepsToReproduce : string;
description : string;
severity : string;

constructor(input_report_id : number, 
            input_applicationName : string, 
            input_reporter : number, 
            input_resolver : number,
            input_location : string,
            input_submissionDate : Date,
            input_stepsToReproduce : string,
            input_description : string,
            input_severity : string) {

    this.report_id = input_report_id;
    this.applicationName = input_applicationName;
    this.reporter = input_reporter;
    this.resolver = input_resolver;
    this.location = input_location;
    this.submissionDate = input_submissionDate;
    this.stepsToReproduce = input_stepsToReproduce;
    this.description = input_description;
    this.severity = input_severity;

}

}