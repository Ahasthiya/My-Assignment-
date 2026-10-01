let score=50
function number(score){
    if(score>0){
        return('positive number')
    }
    else if(score<0){
        return('negative number')

    }
    else{
        return('the score is 0')
    }
}

console.log(number(score))