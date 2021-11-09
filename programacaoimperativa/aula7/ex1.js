// Ex1. O que cada expressão retorna?
!true
// false
!false
// true
!!false
//false
!!true
//true
!1
//false
!!1
//true
!0
//true
!!0
//false
!!''
//false
let x = 5
let y = 9
x < 10 && x !== 5
//false
x > 9 || x === 5
//true
!(x === y)
//true

console.log(
  !true,
  '\n',
  !false,
  '\n',
  !!false,
  '\n',
  !!true,
  '\n',
  !1,
  '\n',
  !!1,
  '\n',
  !0,
  '\n',
  !!0,
  '\n',
  !!'',
  '\n',
  x < 10 && x !== 5,
  '\n',
  x > 9 || x === 5,
  '\n',
  !(x === y),
  '\n'
)
