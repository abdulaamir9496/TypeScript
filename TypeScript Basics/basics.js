//TOPIC: TypeScript first program
// var typeScript = "I am learning TypeScript";
// console.log(typeScript);
;
var Class_one = /** @class */ (function () {
    function Class_one() {
        this.varOne = "I have completed my TypeScript Course";
    }
    return Class_one;
}());
var obj = new Class_one();
document.write(obj.varOne);
console.log(obj.varOne);
