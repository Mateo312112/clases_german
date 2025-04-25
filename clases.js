//EJERCICIO 1:
/*
class persona {
    constructor(nombre) {
        this.nombre = nombre
    }

    caminar(){
        console.log(`${this.nombre} esta caminando`);

    }

}

const persona1 = new persona(`mateo`);

persona1.caminar();
*/



//EJERCICIO 2:
/*
class contador {
    static cuenta = 5;


    static incrementar() {

        contador.cuenta++
        console.log(`la cuenta de ahora es: ${contador.cuenta}`);
    }
}
contador.incrementar();
contador.incrementar();
*/



//EJERCICIO 3:
/*
class Cuentabancaria {
    #saldo
    constructor(saldoInicial = 0) {
        this.#saldo = saldoInicial;
    }
    depositar(cantidad) {
        if (cantidad > 0) {
            this.#saldo += cantidad;
            console.log(`haz depositado $${cantidad} y tu saldo total es de $${this.#saldo}`);
        }
    }
    retirar(cantidad) {
        if (cantidad > 0 && cantidad <= this.#saldo) {
            this.#saldo -= cantidad
            console.log(`haz retirado: $${cantidad} y tu saldo actual es de $${this.#saldo}`);

        } else if (cantidad > this.#saldo) {
            console.log(`no tienes saldo suficiente, tu saldo es de $${this.#saldo}`);
        } else {
            console.log(`ingrese valores validos`);
        }
    }

    consultarsaldo() {
        console.log(`tu saldo es de $${this.#saldo}`);

    } 
}
const cuenta = new Cuentabancaria(1000);

cuenta.consultarsaldo();
cuenta.depositar(200);
cuenta.retirar(100);
*/

//EJERCICIO 4:
/*
class Animal {
    constructor(especie, color, raza) {
        this.especie = especie;
        this.color = color;
        this.raza = raza;
    }


    hacersonido() {
        console.log(`el animal esta haciendo sonido`);
    }
}

class Perro extends Animal {
    constructor(especie) {
        super(especie)
    }

    hacersonido(){
        console.log(`waw waw waw`);
    }

}

class Gato extends Animal{
    constructor(especie){
        super(especie)
    }
hacersonido(){
    console.log(`miau miau miau`);

}
}

const perro = new Perro
const gato = new Gato

perro.hacersonido();
gato.hacersonido();
*/



//EJERCICIO 5:
/*
class Vehiculo{
    constructor(peso, velocidad_max){
        this.peso = peso ;
        this.velocidad_max = velocidad_max;
    }

    mover (){
        console.log(`el vehiculo se esta moviendo`);

    }
}

class Carro extends Vehiculo{
    constructor(peso, velocidad_max, ruedas){
        super(peso, velocidad_max);
        this.ruedas = ruedas;
        this.info = `tiene un peso de ${peso} una velocidad maxima de ${velocidad_max} tiene tambien ${this.ruedas} ruedas`
    }
    mostrarinfo(){
        console.log(this.info);
    }
    mover(){
        console.log(`el carro se esta moviendo`);

    }
}


class Bicicleta extends Vehiculo{
    constructor(peso, velocidad_max, ruedas){
        super(peso, velocidad_max);
        this.ruedas = ruedas;
        this.info = `tiene un peso de ${peso} una velocidad maxima de ${velocidad_max} tiene tambien ${this.ruedas} ruedas`
    }
    mostrarinfo(){
        console.log(this.info);
    }
    mover(){
        console.log(`la bicicleta se esta moviendo`);

    }
}
const bicicleta = new Bicicleta ("15kg", "60km/H", "2");
const carro = new Carro ("1500kg", "180km/H", "4");


bicicleta.mostrarinfo();
bicicleta.mover();
carro.mostrarinfo();
carro.mover();
*/


//EJERCICIO 6:
/*
class universidad {
    static numEstudiante = 0;

    static registrarEstudiante(){
        universidad.numEstudiante++;
        console.log(`registro de estudiante exitoso, total de estudiantes: ${universidad.numEstudiante}`);
    }
}

universidad.registrarEstudiante();

universidad.registrarEstudiante();

universidad.registrarEstudiante();

universidad.registrarEstudiante();
*/


//EJERCICIO 7:
/*
class Coche {
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
        this.info = `el carro es de marca ${marca} y es un modelo ${modelo}`
    }
    mostrarinfo(){
        console.log(this.info);
        
    }
    #encenderMotor(){
        console.log("el motor esta encendido");
    };

    conducir(){
       this.#encenderMotor();
       this.mostrarinfo();
    };
}
const coche = new Coche ("toyota", "corola")

coche.conducir(); 
*/
// EJERCICIO 8:
/*
class empleado {
    #nombre
    #salario
    constructor(nombre, salario) {
        this.#nombre = nombre
        this.#salario = salario
    }
    get nombre(){
        return this.#nombre
    }

    set nombre(nombre){
        return this.#nombre = nombre
    }

    get salario(){
        return this.#salario
    }

    set(salario){
        if (salario >= 0) {
            return this.#salario = salario
        }else
        console.log("el salario esta negativo");
        
    }

    trabajar(){
        console.log(`${this.#nombre} esa trabajando y su salario es de ${this.#salario}`);
    };
}


const empleado1 = new empleado("jose", 3000);
empleado1.trabajar();
*/


// EJERCICIO 9:

/*
class empleado{
    #salario
    constructor(nombre, cargo, salario){
        this.nombre = nombre;
        this.cargo = cargo;
        this.#salario = salario;
    }

    get salario(){
        return this.#salario
    }

    set salario(salario){
        if (this.#salario >= 0) {
            return this.#salario = salario;
        }else{
            console.log(`accion indebida, su salario es de ${this.#salario}`);
        }
    }
      trabajar(){
        console.log(`${this.nombre} esta trabajando, el tiene un cargo de ${this.cargo} y un salario de ${this.#salario}`);

    }
}

class gerente extends empleado{
    constructor(nombre, cargo, salario, vacaciones){
        super(nombre, cargo, salario);
        this.vacaciones = vacaciones;
    }
    trabajar(){
        console.log(`${this.nombre} esta trabajando, el tiene un cargo de ${this.cargo} tiene un salario de ${this.salario} y sus vacacion ${this.vacaciones}`);
}
}
const empleado1 = new empleado("jose", "empleado", 235);
const gerente1 = new gerente("mateo", "gerente", 500, "2 meses")
empleado1.trabajar();
gerente1.trabajar();
*/


//EJERCICIO 10:
/*
class InstrumentoMusical {
    constructor(tipo, material) {
        this.tipo = tipo;
        this.material = material;
        this.info = `este instrumento es un ${this.tipo} y esta echo de ${this.material}`
    }
    verinfo(){
        console.log(this.info)};
    tocar() {
        console.log(`este instrumento esta haciendo sonido`)
    };
}


class Piano extends InstrumentoMusical {
    constructor(tipo, material, info) {
        super(tipo, material, info);
    }

    tocar() {
        console.log(`el ${this.tipo} esta haciendo sonido`)
    };
}


class Guitarra extends InstrumentoMusical {
    constructor(tipo, material, info) {
        super(tipo, material, info);
    }
     tocar() {
        console.log(`el ${this.tipo} esta haciendo sonido`)};
}
const piano = new Piano("piano","madera");
const guitarra = new Guitarra ("guitarra", "madera")
piano.verinfo();
piano.tocar();
guitarra.verinfo();
guitarra.tocar();
*/


//EJERCICIO 11:
/*
class Vehiculo{
#modelo
constructor(modelo, marca){
    this.#modelo = modelo;
    this.marca = marca;
}
arrancar(){
    this.#encendermotor();
    console.log("el carro esta en movimiento");
    
}

#encendermotor(){
    console.log("el motor esta encendido");   
}
}
const vehiculo = new Vehiculo("toyota", "corolla");

vehiculo.arrancar();
*/


//EJERCICIO 12:
/*
class Escuela {
static numEstudiantes = 0;
}
    class Estudiante{
        constructor(nombre, edad){
            this.nombre = nombre;
            this.edad = edad;

        Escuela.numEstudiantes++;
        }
    }
const estudiante1 = new Estudiante ("mateo", 12);
const estudiante4 = new Estudiante ("camilo", 19);
const estudiante3 = new Estudiante ("mateo", 14);
const estudiante2 = new Estudiante ("jose", 23);
console.log( Escuela.numEstudiantes);
*/


//ejercicio 13:
/*
class Cliente {
#saldo
constructor(saldo, nombre, apellido){
this.#saldo = saldo
this.nombre = nombre
this.apellido = apellido
}
#calcularDescuento(){
    console.log("calculando el descuento");
    
}
aplicarDescuento(){
    this.#calcularDescuento();
    console.log("el descuento esta aplicado");
}
verSaldo(){
    console.log("el saldo es de: " + this.#saldo);
    
}
}
const cliente = new Cliente (500, "mateo", "suarez");
cliente.aplicarDescuento();
cliente.verSaldo();
*/


//Ejercicio 14:
/*
class producto {
    #precio
    constructor(precio) {
        this.#precio = precio;
    }
    getprecio() {
        return this.#precio
    }

    setprecio(precio) {
        if (precio > 0) {
            this.#precio = precio;
            console.log(`el precio es de ${this.#precio}`);
        } else {
            console.log("el precio es menor a 0");
        }
    }
}
const cliente = new producto (5000)
console.log(`el precio inicial es de: ${cliente.getprecio()}`);
cliente.setprecio(7000);
console.log(`el precio nuevo: ${cliente.getprecio()}`);
*/



//Ejercicio 15:
/*
class Animal {
    constructor(especie, patas, color) {
        this.especie = especie;
        this.patas = patas;
        this.color = color;
    }

hacersonido(){
    console.log("este animal ahce sonido");
}
}

class Perro extends Animal{
    constructor(especie, patas, color, raza){
        super (especie, patas, color)
        this.raza = raza;
    }

hacersonido(){
    console.log("waw, waw");
    
}
}

class Gato extends Animal{
    constructor(especie, patas, color, tamaño){
        super (especie, patas, color)
        this.tamaño = tamaño;
    }

hacersonido(){
    console.log("miau, miau");
    
}
}
const perro = new Perro ("perro", "tinene 4 patas", "cafe", "pitbull");
const gato = new Gato ("gato", "tinene 4 patas", "blanco", "8kg");
perro.hacersonido();
gato.hacersonido();
*/


//Ejercicio 16:
/*
class Vehiculo{
    mover(){
        console.log("el vehiculo se esta moviendo");
        
    }
}

class Coche extends Vehiculo{
    mover(){
        console.log("el coche esta moviendo por el carril derecho");
        
    }
}

class Bicicleta extends Vehiculo{
    mover(){
        console.log("la bicicleta esta en la ciclovia");
        
    }
}

const coche = new Coche();
const bici = new Bicicleta();

coche.mover();
bici.mover();
*/



//Ejercicio 17:
/*
class Empleado {
    static totalEmpleados = 0;
    constructor(nombre){
        this.nombre = nombre;
        Empleado.totalEmpleados++;
    }

static mostrarEmpleados(){
    console.log(`total de empleados ${Empleado.totalEmpleados}`)};
}

class Gerente extends Empleado{
    constructor(nombre){
     super(nombre)   
    }
};

const empleado1 = new Empleado ("mateo");
const empleado2 = new Empleado ("jose");
const gerente1 = new Gerente ("camila");
const gerente2 = new Gerente ("arturo");

Empleado.mostrarEmpleados();
*/



//Ejercicio 18:
/*
class Persona{
    #edad
    constructor(edad){
        this.#edad = edad
    };

    setedad(nuevaEdad){
        this.#edad = nuevaEdad
        console.log(`edad modificada, edad actual: ${this.#edad}`);
        
    }

    getedad(){
        return this.#edad
    }
}

class Empleado extends Persona{

cambiarEdad(nuevaEdad){
    this.setedad(nuevaEdad);
}
}

const persona1 = new Empleado (15);
console.log(persona1.getedad());

persona1.cambiarEdad(20);
console.log(persona1.getedad());
*/


//Ejercicio 19:
/*
class cuentaBancaria {
    #saldo
    constructor(nombre, contraseña, saldo) {
        this.nombre = nombre;
        this.contraseña = contraseña;
        this.#saldo = saldo;
    }
    setsaldo(nuevosaldo) {
        this.#saldo = nuevosaldo;
        console.log("el saldo ha siod modificado, ahora es de: " + this.#saldo);

    }

    getsaldo() {
        console.log("el saldo es de: " + this.#saldo);

    }

    depositar(dinero) {
        if (dinero <= 0) {
            console.log("no se puede depositar esa cantidad, ingrese una cantidad valida");

        } else {
            this.#saldo += dinero;
            console.log("el saldo quedo en : " + this.#saldo);

        }
    }


    retirar(retirado) {
        if (retirado > 0) {
            this.#saldo -= retirado;
            console.log("el dinero se retiro, su saldo es de: " + this.#saldo);
            
        }else{
            console.log("ingrese cantidades de dinero validas");
            
        }
    }

}

const cliente =  new cuentaBancaria("mateo", 1345, 3400);

cliente.getsaldo();
cliente.setsaldo(4000);
cliente.depositar(500);
cliente.retirar(200);
*/