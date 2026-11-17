/* 
javascript
javascript is language of web. it is a core application. its used for creative dynamic and interactive web development.
its a fundamental component in front-end to web development */

console.log('welcome to javascript basic') 
// ctrl+/ ----single line commend
/* alt+shift+a ----multiple line commend */

/*
primitive datatype --- once we create data type. it cannot be changed becaused its immutable
number
string
boolean
null
undefined
bigint
*/
let firstname = 'Ahasthiya'
console.log(firstname,'-',typeof firstname)

let companyname = 'testleaf'
//companyname = "queagle"
console.log(companyname,'-',typeof companyname)

let phonenumber = 6723904321
console.log(phonenumber,'-',typeof phonenumber)

let isautomation = true
console.log(isautomation,'-',typeof isautomation)

let hasplaywright
console.log(hasplaywright)



/* 
declaration
var ---can redeclared and reassign
let ---can't redeclared and can reassign
const ---can't redeclared and reassigned */

/* 
hoisting ---- It's a default behavior in javascript where declare to moved in a top of the scope in a memory 
creation to before execution 

var --- is hoistion to access the initization --result undefined
let /const --- is hoisting but cannot be access the initization ---result referrence error */

/*
console.log(x) ---result-undefined
var x=10

console.log(y) ---- result-referrence error
let y=20

console.log(z) ----result--referrence error
const z=30
*/
/* 
scoping ---- It's accessibility of the coding and it defined where the variable is access and used

types:
1.global scope---var,let,const
2.functional scope----var
3.block scope---let,const
*/

//globalscope ----it can access anywhere
var a=10
let b=20

function add(){
    console.log(a)
    console.log(b)

}
add()

//functional scope

function date(){
    var d=40
    let c=30
    console.log(c)
}
date()



//block scope

function leaf(){
    let e=20
    console.log(e)

    if(true){
        let u=10
        console.log(u)
        console.log(e)
    }
}
leaf()

//block scope
if(true){
    var v=10
    const y=20
    console.log(v,y)
}
console.log(v)

//conditional statement

//if---else --- learn about range of the condition and multiple logical operators

let marks=40

if(marks>80){
    console.log("Distinction")
}else if(marks>60){
    console.log("First class")
}
else if(marks>35){
    console.log("second class")
}else{
    console.log("fail")
}

let datatype = 'number'

//switch ---- if we have fixed value so we use switch condition

switch (datatype){
    case "string":
        console.log("string datatype")
        break
        case "number":
            console.log("number datatype")
            break
            case "undefined":
                console.log("undefined datatype" )
                break
                case "null":
                    console.log("null datatype")
                    break
                    default:
                    console.log("Invalid datatype")
}

//operators 
//1.arithemitic operators: Addition,subraction,division,multiplication,modulus
//2.assignment operators: a+=1  ---->  a=a+1
a= 10
console.log(a+=5)
console.log(a-=10)
console.log(a*=2)
/*3.comparison operators: (==),(===)
     loose equally (==) ----> it check only the value not a datatype
     strict equally (===) ----> it check value and the datatype
     
true --> values is 1
false --> values is 0*/

//loose equally (==) it check only value not a datatype

console.log(2=="2") //true
console.log(2==true)//false
console.log(1==false)//false
console.log(1==true)//true

//strict equally (===) it check value and datatype also

console.log(2==="2")//false
console.log(2===true)//false
console.log(1===false)//false
console.log(1===true)//false
console.log(2===2)//true

//4.logical operators: and,or,not
//and(true&&true),or(true||false),not(!true)
a=10
b=20
console.log(a>b && b>a)
console.log(a>b || b>a)
console.log(!a>b)
console.log(!a<b)

/*unary operator ----> works on single operand
let x=5
pre-increment ---> ++x ---> console.log(++x)
post-increment --->x++ ---> console.log(x++)
pre_decremnet ---> --x ----> console.log(--x)
post-decremnet --->  x-- ----> console.log(x--)
*/

/* looping statement
looping is execute the block of code repeatedtly based on a condition
1.For loop  ----> if we know the count we can use the for loop
2.While loop ----> if we doesn't know the count we can use the while loop 
3.Do while ----> if we excute the code block at least once then check the conditions
 */

//for loop:

/* for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
} */

for (let i=1;i<=5;i++){
    console.log("I will practice",i,"time")
}

//while loop:
let i=1
while (i<=5) {
    console.log("I learn while loop",i,"time")
    i++
}

let pageloaded = false
while(!pageloaded){
    console.log("i learn while loop")
    pageloaded=true
}

//for loop
for (let i=1;i<=10;i++){
    if(i%5==0)
    console.log(i)
}

/* string ----> collections of characters and words

1.string literal:
2.string object:*/

//concatination:

let Testcase = "Create a new lead"
let TestcaseID = 1234
let result = (Testcase+"-"+TestcaseID)

console.log(result)

//Templete literal
console.log(`${Testcase}-${TestcaseID}`)

//string properties and methods:

//length:
let course = "Playwright"
console.log(`lenght of the course is:${course.length}`)



     
