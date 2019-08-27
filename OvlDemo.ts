

interface OvDemo {

    emit<T1>(event: string, arg1: T1);
    emit<T1, T2>(event: string, arg1: T1, arg2: T2);
}

class OvDemoImpl implements OvDemo{
    emit<T1>(event: string, arg1: T1){

    }
    emit<T1, T2>(event: string, arg1: T1, arg2: T2){

    }
    
}