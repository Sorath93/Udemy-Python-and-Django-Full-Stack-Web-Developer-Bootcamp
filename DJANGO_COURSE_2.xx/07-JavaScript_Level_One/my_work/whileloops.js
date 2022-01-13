var x = 0

while (x < 5) {
    console.log("x is currently: " + x)

    if (x === 3) {
        console.log("x is equal to 3")
        break;
    }
    x = x + 1
}

//var x = 0
//while (x < 10) {

//    x = x + 1
//    while (x < 5) {
//        console.log(x)
//        break


//    }
//    console.log(x)
//}

// EXERCISE: Write a while loop that prints out only the even numbers from 1 to 10
var x = 1
while (x <= 10) {
    if (x % 2 === 0) {
        console.log(x)
    }
    x = x + 1
}




