var obj = {num:5};
var multiply = function(a, b, c) {
    return this.num * a * b * c;
}
console.log(multiply.call(obj, 10, 2, 7));