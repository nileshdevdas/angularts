var LMDemo = /** @class */ (function () {
    function LMDemo() {
        this.a = function (a, b) {
            console.log(a);
            console.log(b);
        };
    }
    return LMDemo;
}());
new LMDemo().a(1, 2);
