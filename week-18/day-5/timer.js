function add(a,b){

    console.log(a+b)
}

// bhookamp()
// setTimeout(bhookamp, 5000)
var count = 0 // 5
var timerid = setInterval(function() { 
    if (count < 3) {
        add(20,20); 
        count++
    }else{
        clearInterval(timerid)
    }
 }, 2000)


console.log("test")

var timerid2 = setInterval(function() { 
    if (count < 5) {
        add(10,10); 
        count++
    }else{
        clearInterval(timerid2)
    }
}, 5000)

console.log("test")



console.log("1 plus 1 is " + 1 + 1)
//"1 plus 1 is 1" + 1
//"1 plus 1 is 11"

var a = 10;
if(a == ++a) //10 == 10++ // 11
{
    console.log(a);
}