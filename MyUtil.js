"use strict";
exports.__esModule = true;
var MyApp_1 = require("./MyApp");
var MyApp_2 = require("./MyApp");
var MyUtil = /** @class */ (function () {
    function MyUtil() {
        console.log("I am invoked......");
        new MyApp_1["default"]();
        new MyApp_2.App1();
        new MyApp_2.App2();
    }
    return MyUtil;
}());
new MyUtil();
