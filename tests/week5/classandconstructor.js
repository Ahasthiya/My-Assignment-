"use strict";
class employee {
    name;
    role;
    department;
    empid;
    /* name:string = "yuva"
    role:string = "SDET"
    department:string ="QA"
    empid:number =1234 */
    constructor(name, role, department, empid) {
        console.log("constructor is executed here");
        this.name = name;
        this.role = role;
        this.department = department;
        this.empid = empid;
    }
    selfintroduction() {
        console.log(`Hi, I am ${this.name},working as ${this.role},in ${this.department},and My empid is ${this.empid}`);
    }
}
const emp = new employee("Hari", "vp", "Engineering project", 1234);
//console.log(emp.name,emp.role,emp.department,emp.empid)
emp.selfintroduction();
