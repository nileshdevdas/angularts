
//  
// 
//  var = (p1:type,p2:type)=> {body}
// 
class LMDemo {
    a = (a:number,  b:number) : number  => {
        console.log(a);
        console.log(b);
        return 100;
    }
}
new LMDemo().a(1,2);


