// Clases

// Creación de la clase
class Persona{
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Creación de un nuevo objeto
const persona1 = new Persona('Lionel', 34);
persona1.saludar();

// Creación de otro objeto
const persona2 = new Persona('Cristiano', 38);
persona2.saludar();