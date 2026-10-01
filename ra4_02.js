
const esAlquilable = (disponible) => {
    return disponible ? true : false;
}

console.log(esAlquilable(false));

const permiteAlquiler = (edad, edadMinima) => {
    return edad >= edadMinima ? true : false;
}

console.log(permiteAlquiler(16, 18))

const tieneSaldo = (saldo, precio) => {
    return saldo >= precio ? true : false;
}

console.log(tieneSaldo(23, 100))

const puedeAlquilar = (disponible, edad, saldo, dias, precio) => {
    return esAlquilable(disponible) && permiteAlquiler(edad, 18) && tieneSaldo(saldo, calcularPrecio(precio, dias)) ? true : false;
}

console.log(puedeAlquilar(true, 18, 50, 1, 100));