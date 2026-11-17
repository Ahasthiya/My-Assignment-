class student{
    studentname:string
    course:string

    constructor(studentname:string,course:string){
    this.studentname = studentname
    this.course =course
}
displaydetails(){
    console.log(`${this.studentname},${this.course}`)
}
}

const student1 = new student("Hari","playwright with typescript")
const student2 = new student("Ram","Selenium and java")
student1.displaydetails()
student2.displaydetails()