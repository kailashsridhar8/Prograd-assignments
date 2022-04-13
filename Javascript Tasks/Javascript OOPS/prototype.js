function Employee(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Employee.prototype.fullName = function(){
    return this.firstName + ' ' + this.lastName;
}

var e1=new Employee('Kailash','Sridhar');
console.log(e1.fullName()); 