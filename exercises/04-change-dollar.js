// Cambio de moneda, de dolar a soles

const dolar = 3.78;

const cambio = (usa) => {
    const total = usa * dolar;
    console.log(`$${usa} dólares son S/.${total.toFixed(2)} soles`);
};

// Llamamos a la función y mandamos el argumento de dólares a cambiar
cambio(35);