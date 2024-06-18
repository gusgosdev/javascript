// FIZZ BUZZ

// En este ejercicio mostraremos, fizz cuando un número sea divisible a 3.
// Buzz cuando sea divisible a 5.
// Y fizzbuzz cuando sea divisible a 3 y 5.

// En este caso lo haremos con una función
const fizzbuzz = () => {
    for(let i = 0; i <= 100; i++){
        let tres    = i % 3 === 0;
        let cinco   = i % 5 === 0;
        
        if(tres && cinco){
            console.log(`${i} fizzbuzz`);
        } else if(cinco){
            console.log(`${i} buzz`);
        } else if(tres){
            console.log(`${i} fizz`);
        } else{
            console.log(i);
        }
    }
};

// Llamamos a la función
fizzbuzz();