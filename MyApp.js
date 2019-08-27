var MyApp = /** @class */ (function () {
    function MyApp() {
        this.a = 10;
        this.b = 20;
        console.log("I was Constructed");
        console.log(this.a);
        console.log(this.b);
    }
    //fnName(p1:p1Type, p2:p2Type):returnType {
    //}
    MyApp.prototype.add = function (num1, num2) {
        var num3 = num1 + num2;
        return num3;
    };
    MyApp.prototype.substract = function () {
    };
    return MyApp;
}());
var a1 = new MyApp(); // will call a constructor and create a object
var a2 = new MyApp(); /// will call a constrcutor and create a object 
a1.add(1, 2);
a2.add(10, 20);
console.log(a1);
