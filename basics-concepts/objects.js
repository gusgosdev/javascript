//  Objetos

// Creación de el objeto
const persona = {
    nombre: 'Lionel',
    apellidos: ['Messi', 'Mbappé', 'Rashford'],
    edad: 30,
    
    saludar() {
        console.log(`Hola, me llamo ${this.nombre}.`);
    }
};

persona.saludar();