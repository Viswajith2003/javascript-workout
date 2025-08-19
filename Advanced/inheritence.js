class employee{
    constructor(name,position,salary){
        this.name=name;
        this.position=position;
        this.salary=salary;
    }

    getSalary=()=>{
        console.log(`${this.name} credited ${this.salary}`);
    }
}

class manager extends employee{

}

let m1=new manager("viswa","developer",130000);
console.log(m1.getSalary());
