//1st pass
var myVariable; //undefined
var abc //undefined
var add; //undefined
function print(){
    console.log("Printed")
}
function show(a,b) {
    console.log(a + b);
}
print()
show(myVariable,abc)

console.log(myVariable)

console.log(abc)

add(20,30)

add = function add(a,b) {
    console.log(a + b);
}

myVariable = 100
abc = 20

console.log(myVariable + abc)