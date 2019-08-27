import {Lifecycle} from './Lifecycle';
class LSDemo implements Lifecycle{
    destroy(){
        console.log("Destroy")
    }
    init(){
        console.log("Init")
    }


}
var lf:Lifecycle = new LSDemo();
lf.init(); 
lf.destroy();