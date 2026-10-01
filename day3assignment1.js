let gendertype='female'
function printgender(){
    let color='brown'
    if (gendertype.startsWith('female')){
        var age=30
        let color='pink'
    console.log('color inside the if-block:',color)
}
console.log('age inside the if-block:',age)
}
printgender()
console.log('gendertype:',gendertype)

gendertype='male'
printgender()
