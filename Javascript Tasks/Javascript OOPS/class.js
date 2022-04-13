class Employee{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }

    details(){
        console.log(this.id+" "+this.name );
    }
}

var e1=new Employee(100,'Kailash');
var e2=new Employee(101,'Seenu');
e1.details();
e2.details();

