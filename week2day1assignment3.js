let detail=['vijaya',19,'guindy']
console.log(detail)

//push
console.log(detail.push('chennai'))
console.log('push:',detail)

//pop
let poparray=detail.pop()
console.log('pop:',poparray)
console.log('pop:',detail)

//shift
let shiftarray=detail.shift()
console.log('shift:',shiftarray)
console.log('shift:',detail)

//unshift

let unshiftarray=detail.unshift(101)
console.log('unshift:',unshiftarray)
console.log('unshift:',detail)

//includes

console.log('includes:',detail.includes(101))

//indexof

console.log('index:',detail.indexOf(19))

//join

console.log('join:',detail.join('-'))

//reverse

console.log('reverse:',detail.reverse())

//sort

let number=[3,5,7,2,9,11,14]
console.log('sort:',number.sort())
