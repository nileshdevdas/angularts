var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.addCoins = function () {
        console.log("Adding Coins to Employee");
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super.call(this) || this;
    }
    Manager.prototype.addCoins = function () {
        _super.prototype.addCoins.call(this);
        console.log("Adding Coins in Manager");
    };
    return Manager;
}(Employee));
var m1 = new Manager();
var e1 = new Employee();
m1.addCoins();
