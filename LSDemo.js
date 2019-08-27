"use strict";
exports.__esModule = true;
var LSDemo = /** @class */ (function () {
    function LSDemo() {
    }
    LSDemo.prototype.destroy = function () {
        console.log("Destroy");
    };
    LSDemo.prototype.init = function () {
        console.log("Init");
    };
    LSDemo.prototype.destroy = function (s) {
        return 100;
    };
    return LSDemo;
}());
var lf = new LSDemo();
lf.init();
lf.destroy();
