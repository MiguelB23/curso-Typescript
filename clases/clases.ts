class Persona {
    private name:string;

    constructor(name: string){
        this.name = name;
    }

    getName():string{
        return this.name;
    }

    static staticMethod():number{
        return 10;
    }
}

let person1 = new Persona("Juan");
console.log(person1.getName());
console.log(Persona.staticMethod());