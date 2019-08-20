

class Person
{
    firstname: string = "default";
    lastname: string = "default";
    age: number = 1;
    phone_number: number = 1;
    state: string = "default";
    zipcode: number = 1;
    occupation: string = "default";
    hourlyWage: number = 1;
    certification: string[];

    constructor(){
    }

    //METHOD RETURNS BASIC INFO
    basic_info(): string{
        return this.firstname + " " + this.lastname + " Age: " + this.age + " Telephone: " + this.phone_number;
    }

    //METHOD RETURNS NAME PAIR AS SINGLE STRING
    name_only(): string{
        return this.firstname + " " + this.lastname;
    }

    //METHOD RETURNS ADDRESS
    address(): string{
        return this.state + " " + this.zipcode;
    }

    //METHOD RETURNS HOURLY WAGE
    wage(): number{
        return this.hourlyWage;
    }
}