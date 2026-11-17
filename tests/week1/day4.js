/*for (let i=1;i<=50;i++) {
    if(i%5==0)
        {console.log(i)

    }
        
}*/

/*let str='Testleaf'
let reversed=''
for(let i=str.length-1;i>=0;i--) {
    reversed=reversed+str[i]
}
console.log(reversed)*/


/*let gendertype='female'
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
printgender()*/

/*function launchbrowser(browsername){
    if (browsername=== 'chrome'){
        console.log(browsername)
    }
    else{
        console.log(browsername)}
}
launchbrowser('chrome')*/

function runtest(Testtype){
    switch(Testtype){
        case 'smoke':
            console.log('smoke testing')
            break
            case 'sanity':
                console.log('sanity testing')
                break
                case 'regression':
                    console.log('regression testing')
                    break
                    default:
                        console.log('invalid')
}
}
runtest('smoke')




