var Employee = /** @class */ (function () {
    function Employee() {
        this.firstname = "default";
        this.lastname = "default";
        this.age = 1;
        this.phone_number = 1;
        this.state = "default";
        this.zipcode = 1;
        this.occupation = "default";
        this.hourlyWage = 1;
    }
    //METHOD RETURNS BASIC INFO
    Employee.prototype.basic_info = function () {
        return this.firstname + " " + this.lastname + " Age: " + this.age + " Telephone: " + this.phone_number;
    };
    //METHOD RETURNS NAME PAIR AS SINGLE STRING
    Employee.prototype.name_only = function () {
        return this.firstname + " " + this.lastname;
    };
    //METHOD RETURNS ADDRESS
    Employee.prototype.address = function () {
        return this.state + " " + this.zipcode;
    };
    //METHOD RETURNS HOURLY WAGE
    Employee.prototype.wage = function () {
        return this.hourlyWage;
    };
    //METHOD ACCEPTS A STRING AND ADDS IT TO CERTIFICATION ARRAY
    Employee.prototype.addCerts = function (C) {
        var certlength = this.certification.length;
        this.certification[certlength - 1] = C;
    };
    //METHOD RETURNS CERTIFICATION ARRAY
    Employee.prototype.getCerts = function () {
        return this.certification;
    };
    return Employee;
}());
//CREATE FAKE EMPLOYEES
var user1 = new Employee();
user1.firstname = "Scott";
user1.lastname = "Pilgrim";
user1.age = 1;
user1.phone_number = 1;
user1.state = "CA";
user1.zipcode = 11111;
user1.occupation = "protagonist";
user1.hourlyWage = 4;
var user2 = new Employee();
user2.firstname = "Kyle";
user2.lastname = "Brovloski";
user2.age = 1;
user2.phone_number = 1;
user2.state = "CO";
user2.zipcode = 22222;
user2.occupation = "protagonist";
user2.hourlyWage = 0;
//INPUT SOME FAKE EMPLOYEE VALUES INTO A DOCUMENT
document.getElementById("1").innerHTML = user1.name_only() + " lives at " + user1.address() + " and makes $" + user1.hourlyWage + " an hour.";
document.getElementById("2").innerHTML = user2.name_only() + " lives at " + user2.address() + " and makes $" + user2.hourlyWage + " an hour.";
//INSTANTIATE A DEFAULT EMPLOYEE
var newperson = { firstname: "Gary", lastname: "Sinese" };
//INSTANTIATES AN EMPLOYEE OBJECT USING INPUTS THAT CONFORM TO THE CONTRACT OF THE EMPLOYEEOPTIONS INTERFACE ABOVE
function MakeEmployee(newobject) {
    var new_human = new Employee();
    new_human.firstname = newobject.firstname;
    new_human.lastname = newobject.lastname;
    return new_human;
}
