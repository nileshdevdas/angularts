
class Employee{
    constructor(){
    }

    addCoins(){
        console.log("Adding Coins to Employee");
    }
}


class Manager extends Employee{
    constructor(){
        super();
    }

    addCoins(){
        super.addCoins();
        console.log("Adding Coins in Manager")
    }
}
var m1  = new Manager();
var e1 = new Employee();
m1.addCoins();