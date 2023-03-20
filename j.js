//Evaluation
/* function ev1(a, b, c, d) {
  function clo() {
    return ((a*(b-c)**2)/d)+2
  }
  return clo
}
let Y = ev1(2, 4, 2, 2)
Y() */

//Definite Average
/* function avg(a, b, c) {
  function clo() {
    return (a+b+c)/3
  }
  return clo
}
let Avg = avg(1, 2, 3)
Avg() */

//Indefinite Average
/* function avg(...arg) {
  let total = 0
  for(let i of arg){
    let num = parseInt(i)
    total+=num
  }
  return total/arguments.length
}
avg(1, 2, 3, 4, 5, 6, 7)
 */
 
//Definite Even Numbers
/* function evN() {
  let even = ""
  for(let i = 0; i < 10; i++){
    if(i%2===0) {
      even += ` ${i}`
    }
  }
  return even
}
 */

//Indefinite Even Numbers
/* function evN(e) {
  let num = ""
  for(let i = 0; i <= parseInt(e); i++){
    if(i%2===0) {
      num += ` ${i}`
    }
  }
  return num
}
evN(50) */

//Definite Maximum Number
/* function maxNum(a, b) {
  return Math.max(a, b)
}
maxNum(2, 4) */

//Indefinite Maximun Number
/* function maxNum(...arg) {
  let num = -Infinity
  arg.forEach(item=>{
    if(item > num) {
      num = item
    }
  })
  return num
}
maxNum(2, 3, 4, 5, 2, 3, 4, 8, 4) */
//Solution 3
/* function maxNum(...arg) {
  return Math.max(...arg)
}
maxNum(2, 4, 2, 17, 81, 91, 10, 17, 6) */

//Definite Mean
/* function avg() {
  let sum = 0
  let mean = 0
  for(let i = 0; i <= 1000; i++){
    sum += i
  }
  mean = sum/1000
  return mean
}
avg() */

//Indefinite Mean || No Memory
/* function avg(...arg) {
  let sum = 0
  let count = 0
  let mean = 0
  arg.forEach(item=>{
    sum += item
    count++
  })
  mean = sum/count
  return mean
}
avg(1, 2, 3, 4) */

//Indefinite Mean || Memory 
/* let sum = 0
let mean = 0
let count = 0
let totalItems = []

function avg(...add) {
  add.forEach(item=>{
    sum += item
    count++
    totalItems.push(item)
  })
  mean = sum/count
  return `Sum: ${sum}
  Mean: ${mean}
  Length: ${count}
  Items: ${totalItems}`
} 
avg(1, 2, 6, 9, 3, 7, 6, 10, 18, 15) */

//Evaluation 
/* function ev2(U, V, W) {
  return `${(U + (V*2))/W}`
}
ev2(2, 2, 3) */

//Moving average
/* let sum = 0
let counter = 0
let avg = 0
let items = []
let trash = ""
let MAX_NUM = 12

function movArr(...nums) {
  nums.forEach(num => {
    sum += num
    counter++
    items.push(num)
  })
  avg = sum/counter
  
  if(items.length > MAX_NUM) {
    del = items.length 
    trash += items.splice(0, del-MAX_NUM) + ","
  }
} */

//Recursive functions and loops for getting any nested objects && arrays
/* let obj = {
  name: "Ben",
  age: 19,
  nest1: {
    obj1: [1, 2, 3, [4, 5, 6]],
    obj2: {
      lc: [7, 8, [9, [10, [11]], {
        r: [12, 13, {
          s: {
            one: 14,
            two: 15
          }
        }]
      }]]
    }
  },
  skill: "Programming"
}

function check(a) {
  if (Array.isArray(a)) Arr(a);
  else if (typeof a === "object") Obj(a);
  else console.log(a);
}

function Arr(b) {
  for (let i of b) {
    if (Array.isArray(i)) Arr(i);
    else if (typeof i === "object") Obj(i);
    else console.log(i);
  }
}

function Obj(c) {
  for (let j in c) {
    if (Array.isArray(c[j])) Arr(c[j]);
    else if (typeof c[j] === "object") Obj(c[j]);
    else console.log(c[j]);
  }
}
check(obj) */