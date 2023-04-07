class vehicle{
    name: string;

    constructor(name:string){
        this.name = name;
    }

    getName():string{
        return this.name;
    }
}
class Car extends vehicle{
    model: string;

    constructor(model:string,name:string){
        super(name);
        this.model = model;
    }

    getNameModel(): string{
        return this.model + this.name;

    }
}
class Truck extends vehicle{
    constructor(name:string){
        super(name);
    }
}

var mycar = new Car("Sports Model...","BMW");
console.log(mycar.getNameModel());

var truck = new Truck("Tata Truck");
console.log(truck.getName());