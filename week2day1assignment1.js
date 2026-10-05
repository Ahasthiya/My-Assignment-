function lengthoflastword(s){
    let words=s.split(" ")
    let lastwords= words[words.length-1]
    return lastwords.length

}

console.log(lengthoflastword('Hello world'))

function lengthoflastword(s){
    let words=s.split(" ")
    let lastwords= words[words.length-1]
    return lastwords.length

}

console.log(lengthoflastword('fly me to the moon'))

function isanagram(str1,str2){
    let first= str1.split('').sort().join('')
    let second= str2.split('').sort().join('')
    return first===second
}
console.log(isanagram('listen','silent'))
console.log(isanagram('hello','world'))