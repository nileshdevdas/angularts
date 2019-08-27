"use strict";
exports.__esModule = true;
var App1 = /** @class */ (function () {
    function App1() {
    }
    return App1;
}());
exports.App1 = App1;
var App2 = /** @class */ (function () {
    function App2() {
    }
    return App2;
}());
exports.App2 = App2;
;
var MyApp = /** @class */ (function () {
    function MyApp() {
        this.a = 10;
        this.b = 20;
        console.log("I was Constructed");
        console.log(this.a);
        console.log(this.b);
    }
    MyApp.prototype.add = function (num1, num2) {
        var num3 = num1 + num2;
        return num3;
    };
    MyApp.prototype.substract = function () {
    };
    return MyApp;
}());
exports["default"] = MyApp;
