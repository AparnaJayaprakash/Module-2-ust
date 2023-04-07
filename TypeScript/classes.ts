class Employee1{
    private fname: string;
    private mname!: string;
    private lname: string;

    constructor(fname:string,mname:string,lname:string){
        this.fname = fname;
        this.mname = mname;
        this.lname = lname;
    }

    getMname(): string{
        return this.mname;
    }
}
let e1 = new Employee1('a','b','c');
console.log(e1.getMname());












class Employee{    //instance variable should always be private
    //  empno: number;
    //  ename: string;
    //  sal: number;
    //  attendence: any;    //we can directly use this variable without get method

    private readonly empno: number;   //readonly acts as final we cannot change value. we can initialise it only 1 time in constructor after that it will give error.
    private ename: string;
    private sal: number;
    private attendence: any;

    //we have get the variable because it has made private
    public getEmpno():number{
        return this.empno;      //return this.empno=40 this will give error since its readonly we cannot assign value.
    }
    public getEname():string{
        return this.ename;
    }
    public getSal(): number{
        return this.sal;
    }
    public getAttendence(): number{
        return this.attendence;
    }


// constructor(){
//     this.empno = 101;
//     this.ename = "abc";
//     this.sal = 20000;
//     this.attendence = 18;
// }

//constructor overloading is not possible

constructor(empno: number, ename: string, sal: number, attendence: any){
    this.empno = empno;
    this.ename = ename;
    this.sal = sal;
    this.attendence = attendence;
}

print(): void{
    console.log(this.empno, this.ename, this.sal, this.attendence);
}
}

//no need to keep this in block, it can stand alone
// var emp = new Employee();
// var emp1 = new Employee();
// emp1.empno = 102;
// var emp2 = new Employee();
// emp2.empno = 103;
// emp.print();
// emp1.print();
// emp2.print();

//parametrized object creation
let emp = new Employee(1,'abc',3000,10);
let emp1 = new Employee(2,'bbc',2000,30);
let emp2 = new Employee(3,'cde',3500,20);
emp.print();
emp1.print();
emp2.print();

var emparray : Employee[] = [emp,emp1,emp2];

emparray.forEach((element)=>{
    console.log(element);
});


