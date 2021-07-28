let suma = function( a:number, b:number){
    return a + b;
}

console.log(suma(5, 3))

let sumaFlecha = (a:number, b:number) => a + b;

console.log(sumaFlecha(3, 22));

var obtainName = function(){
    return "Miguel";
}

console.log(obtainName());

let obtainNameF = () => "Miguel";

console.log(obtainNameF())