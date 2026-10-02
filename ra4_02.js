
const puedeAlquilar = (disponible, edad, saldo, dias, precio) => {
    return (() => disponible ? true : false)() &&
        (() => edad >= 18 ? true : false)() &&
        (() => saldo >= (() => {
            let precioFinal = 0;

            if (dias >= 1 && dias <= 3) {
                precioFinal = precio * dias;
            } else if (dias >= 3 && dias <= 6) {
                precioFinal = (precio * dias) - ((precio * dias) * 0.05);
            } else {
                precioFinal = (precio * dias) - ((precio * dias) * 0.1);
            }

            return precioFinal;
        })()) ? true : false;
};


setTimeout(() => console.log(3), 1000);
setTimeout(() => console.log(2), 2000);
setTimeout(() => console.log(1), 3000);
setTimeout(() => {
    console.log(puedeAlquilar(true, 18, 50, 1, 100) ? "Se puede alquilar": "No se puede alquilar");
}, 3000);
