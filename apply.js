var obj1 = {num:5};
var obj2 = {num:4};
var multiply = function(a, b, c) {
    return this.num * a * b * c;
}
var arr = [1, 2, 3];
console.log(multiply.apply(obj1, arr));
console.log(multiply.apply(obj2, arr));