let multiply = function(x, y) {
    console.log(x * y);
}
let multiplybyten = multiply.bind(this, 10);
multiplybyten(20);
let multiplybyhundred = multiply.bind(this, 100);
multiplybyten(50);

