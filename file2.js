// how do we wrap up our code in a FUNCTION

function a() {
    var sum = 0;
    for (i = 0; i < 10; i++) {
        // instructions go here!
        console.log("HELLO Happy Summer!!!" + i);
        sum += i;
        // sum = sum + i;
        if (i == 5) {
            break;
        }
    }
    return sum;
}

console.log("sum is ", a());
