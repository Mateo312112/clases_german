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

















/*
class persona {
    #nombre
    constructor(Nombre) {
        this.#nombre = Nombre
    }
    caminar(){
        console.log(`${this.#nombre} esta caminando`);
    
    }

    obtenerNombre(){
       return this.#nombre
    }
}




class empleado extends persona{
#salario
constructor(Salario, Nombre){
    super(Nombre)
    this.#salario = Salario;
}
trabajar(){
    console.log(`${this.obtenerNombre()} esta trabajando`); 
}

setSalario(){
    return this.#salario = Salario
}

getSalario(){
    return this.#salario;
}
}


const empleado1 = new empleado (2000, "mateo")
const persona1 = new persona ("mateo")
persona1.caminar();
empleado1.trabajar();
console.log(empleado1.getSalario());
*/