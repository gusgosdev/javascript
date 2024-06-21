// Arreglos

// Creación de el arreglo
let miArreglo = ['Messi', 'Ronaldo', 'Neymar', 'Mbappé', 'Bellingham'];

// Ver el arreglo
console.log(`El arreglo es: ${miArreglo}.`);

// Ver la longitud de el arreglo
const cantidad  = miArreglo.length;
console.log(`El arreglo contiene ${cantidad} datos.`);

// Mostrar un elemento de el arreglo por su posición
let e = 2;
const filtroArreglo = miArreglo[e];
console.log(`El dato de la posición ${e} es: ${filtroArreglo}.`);

// Agregar un elemento al final del arreglo (en la última posición)
let agregar = 'Lewandowski';
miArreglo.push(agregar);
console.log(`push: Se agregó ${agregar}. El nuevo arreglo es: ${miArreglo}.`);

// Agregar un elemento al inicio del arreglo (en la posición 0)
agregar = 'Haaland';
miArreglo.unshift(agregar);
console.log(`unshift: Se agregó ${agregar}. El nuevo arreglo es: ${miArreglo}.`);

// Eliminar el último elemento del arreglo
let eliminado = miArreglo[miArreglo.length - 1];
miArreglo.pop();
console.log(`pop: Se eliminó ${eliminado}. El nuevo arreglo es: ${miArreglo}.`);

// Eliminar el primer elemento del arreglo
eliminado = miArreglo[0];
miArreglo.shift();
console.log(`shift: Se eliminó ${eliminado}. El nuevo arreglo es: ${miArreglo}.`);