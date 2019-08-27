class MyApp {
    a: number = 10;
    b: number = 20;
    constructor() {
        console.log("I was Constructed");
        console.log(this.a);
        console.log(this.b);
    }
    add(num1:number, num2:number):number{
        let num3 = num1 + num2; 
        return num3; 
    }
    substract() {
    }
}
var a1 = new MyApp();  // will call a constructor and create a object
var a2 = new MyApp();  /// will call a constrcutor and create a object 
a1.add(1, 2);
a2.add(10, 20);
console.log(a1);



