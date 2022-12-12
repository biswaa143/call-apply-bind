var obj = {num:5};
var multiply = function(a, b, c) {
    return this.num * a * b * c;
}
var arr = [1, 2, 3];
var bound = multiply.bind(obj);
console.log(bound(1, 2, 3));
