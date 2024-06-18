// CONTADOR DE VOCALES

// Este ejercicio consta en mostrar la cantidad de vocales que contiene un string.
// En este caso pondremos directamente el string en la constante text.

// Creamos nuestras variables
const text = 'Hola, soy el string de prueba';
const vocal = ['a','e','i','o','u'];
let cont = 0;

// Iteramos el string para comprobar la cantidad de vocales
for (let e = 0; e < text.length; e++){
    if(vocal.includes(text.toLowerCase()[e])) {
        cont++;
    }
}

// Mostramos en consola
console.log(`Tu texto es: ${text}`);
console.log(`Total de vocales: ${cont}`);