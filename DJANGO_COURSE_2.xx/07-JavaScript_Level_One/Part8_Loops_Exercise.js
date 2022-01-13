/// PART 8 - LOOP EXERCISES
// Before we continue on with your project, let's practice some loops!
// You'll have just two problems, but you'll need to use each loop type we
// learned about to solve them!


///////////////////
//// PROBLEM 1 ///
/////////////////

// Use a For Loop to print (console.log()) out the word "hello" 5 times.
//
// Do this with a While Loop and a For Loop

// While Loop
var i = 0
while (i < 5) {
     console.log("hello")
     i++
}

// For Loop
for (i = 0; i < 5; i++) {
    console.log("hello")
}




/////////////////
// PROBLEM 2 ///
///////////////

// Use Loops to console.log() (print out) all the odd numbers from 1 to 25
// Do this using two methods, a while loop and a for loop

// METHOD ONE
// While Loop
var i = 1
while (i <= 25) {
    //console.log(i)
    if (i % 2 === 1) {
        console.log(i);
    }
    i++
} console.log("loop ended")
// the above prints 25 twice when using node for some reason. It seems that node prints the default value too which in this case might be the last value of the iteration.
// Do this instead and run it like "node filename.js" instead

function myFunc() {
    var i = 1
    while (i <= 25) {
        if (i % 2 === 1) {
            console.log(i);
        }
        i++
    }
    return undefined; // <--- this
}

myFunc()

// METHOD TWO
// For Loop
for (i = 1; i <= 25; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
}