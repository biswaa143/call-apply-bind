let multiply = function(x) {
    return function(y) {
        console.log(x * y);
    }
}
let multiplybyfive = multiply(5);
multiplybyfive(25);
let multiplybyseven = multiply(7);
multiplybyseven(30);