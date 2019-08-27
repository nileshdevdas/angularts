import MyApp  from './abc/MyApp';
import {App1, App2} from './abc/MyApp';
class MyUtil {
    constructor() {
        console.log("I am invoked......");
        new MyApp(); 
        new App1(); 
        new App2();
    }
}
new MyUtil();
