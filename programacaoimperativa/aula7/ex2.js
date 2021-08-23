let x = 10
let y = 'a'
console.log(y === 'b' || x >= 10)
//true

let a = 3
let b = 8
console.log(!(a == '3' || a === b) && !(b !== 8 && a <= b))
//false && true -> false

let str = ''
//false
let msg = 'haha!'
//true
let eBonito = 'false'
//true
console.log(!((str || msg) && eBonito))
//!(true && true) -> !true -> false
