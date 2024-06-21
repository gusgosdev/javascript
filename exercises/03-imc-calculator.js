// CALCULADORA DE IMC

// Este ejercicio consta en calcular el IMC de una persona.
// Decirle en qué grado está su IMC.
// Fórmula = peso(Kg)/altura(m)²

// Creamos las variables
let peso    = 74;
let altura  = 1.71;
const calcular = peso/(altura**2);

// Verificamos la categoría del IMC, según esta tabla:
// Por debajo de peso normal:  IMC menor de 18.5
// Peso normal:                IMC entre 18.5 y 24.9
// Sobrepeso:                  IMC entre 25 y 29.9
// Obesidad:                   IMC de 30 o mayor

console.log(calcular);
const reducido = calcular.toFixed(2); // Redondea el resultado a 2 decimales

if(reducido < 18.5){
    console.log(`Tu IMC es ${reducido}: Por debajo de peso normal`);
} else if(reducido>=18.5 && reducido<=24.9){
    console.log(`Tu IMC es ${reducido}: Peso normal`);
} else if(reducido>=25 && reducido<=29.9){
    console.log(`Tu IMC es ${reducido}: Sobrepeso`);
} else if(reducido >= 30){
    console.log(`Tu IMC es ${reducido}: Obesidad`);
}