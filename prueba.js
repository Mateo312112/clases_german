class Persona {
    #nombre
    constructor(nombre) {
        this.#nombre = nombre
        
    }
    caminar() {
        console.log(`${this.nombre} está caminando`);   
    }
    getnombre() {
        return this.#nombre;
    }
    setedad(edad) {
        this.edad = edad;
    }
    }

class Empleado extends Persona {
    #salario
    constructor(nombre, salario, edad) {
        super(nombre)
        this.#salario = salario
        this.edad = edad
    }

    trabajar(){
        console.log(`${this.getnombre()} está trabajando`);
    }
    setsalario(salario){
        this.#salario = salario
    }
    getsalario(){
        return this.#salario
    }
    setedad(edad) {
        super.setedad(edad)
    }
}

class CuentaBancaria {
    #saldo
    constructor() {
        this.#saldo = 0
    }               
    #nuevosaldo(cantidad) {
        this.#saldo += cantidad;
      }
    depositar(cantidad){
        if (cantidad > 0) {
            this.#nuevosaldo(cantidad)
        } else {
            console.log("La cantidad a depositar debe ser mayor a 0");
            
        }
    }
    retirar(cantidad){
        if (cantidad > 0 && cantidad <= this.#saldo) {
            this.#nuevosaldo(-cantidad)
        } else {
            console.log("Saldo insuficiente o cantidad invalida");
        }
    }
    versaldo(){
        return this.#saldo
    }
}

class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca
        this.modelo = modelo
    }

    #encendermotor(){
        console.log("Motor encendido");
        
    }
    arrancar(){
        this.#encendermotor()
        console.log(`${this.marca} ${this.modelo} ha marcado`);                 
    }
    mover(){
        console.log("El vehiculo se está moviendo");
        
    }
}                              

class Coche extends Vehiculo {
    mover(){
        console.log(`${this.marca} ${this.modelo} se está moviendo en la carretera`);
    }
}

class Bicicleta extends Vehiculo {
    mover(){
        console.log(`${this.marca} ${this.modelo} se está moviendo en el parque`);
    }
}

class EmpresaTransporte {
    static totalempleados = 0
    constructor(totalempleados) {
        EmpresaTransporte.totalempleados++;
    }
    static registrarempleado(){
        EmpresaTransporte.totalempleados++;
    }
    asignarvehiculo(empleado, vehiculo){
        console.log(`${empleado} conduce ${vehiculo}`);
    }
}


let empleado1 = new Empleado("Pepe", 100, 69);
let cuenta1 = new CuentaBancaria();
let coche1 = new Coche("Honda", "Civic");
let bicicleta1 = new Bicicleta("Specialized", "Enduro");
let empresa = new EmpresaTransporte();



empresa.asignarvehiculo(empleado1.getnombre(), `${coche1.marca} ${coche1.modelo}`);
coche1.mover();
bicicleta1.mover();
empleado1.caminar();
empleado1.trabajar();
empleado1.setsalario(1000);
console.log(empleado1.getsalario());
empleado1.setedad(19);
console.log(empleado1.edad);
cuenta1.depositar(50);
cuenta1.retirar(20);
console.log(cuenta1.versaldo());

