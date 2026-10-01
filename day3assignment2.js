function launchbrowser(browsername){
    if (browsername=== 'chrome'){
        console.log(browsername)
    }
    else{
        console.log(browsername)}
}
launchbrowser('chrome')

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

