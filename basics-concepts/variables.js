// Variables

// Creación de variables (el valor puede cambiar)
console.log('===== Variables =====');
let variableUno     = 'Mi primera variable';
let variableDos     = 'Soy un string';
console.log(`variableUno dice: "${variableUno}" y variableDos: "${variableDos}".`);

variableUno         = 'Cambié de valor';
variableDos         = 21;
console.log(`Ahora variableUno dice: "${variableUno}" y variableDos: "${variableDos}".`);

console.log('=============================================================');

// Creación de constantes (el valor NO puede cambiar)
console.log('===== Constantes =====');
const constanteUno  = 'Mi primera constante';
const constanteDos  = 23;
const constanteTres = 'Cambio';
const todas = `${constanteUno}, ${constanteDos}, ${constanteTres}`;

console.log(`El valor de las constantes son: ${todas}`);