export class App1{}
export class App2{};

export default class MyApp {
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