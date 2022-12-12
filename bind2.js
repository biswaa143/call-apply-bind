var obj = {student:20};
var studentAge = function(age) {
    return this.student;
}
var bound = studentAge.bind(obj);
console.log(bound(20));