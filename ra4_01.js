function calcularPrecio(precio, dias){
    let precioFinal = 0;
    if(dias >= 1 && dias <= 3){
        precioFinal = precio * dias;
    }else if(dias >= 3 && dias <=6){
        precioFinal = (precio * dias)-((precio * dias)*0.05)
    }else{
        precioFinal = (precio * dias)-((precio * dias)*0.1)
    }
    return precioFinal;
}

console.log(calcularPrecio(100,4));

function esAlquilable(disponible){
    return disponible ? true: false;
}

console.log(esAlquilable(false));

function permiteAlquiler(edad,edadMinima){
    return edad >= edadMinima ? true: false;
}

console.log(permiteAlquiler(16,18))

function tieneSaldo(saldo, precio){
    return saldo >= precio ? true: false;
}

console.log(tieneSaldo(23, 100))

function puedeAlquilar(disponible, edad, saldo, dias, precio){
    return esAlquilable(disponible) && permiteAlquiler(edad,18) && tieneSaldo(saldo, calcularPrecio(precio,dias)) ? true : false;
}

console.log(puedeAlquilar(true, 18, 50, 1, 100));