edad = 15
disponible = false
saldo = 3.48

if (disponible && edad >= 16 && saldo >= 3.49) {
    console.log('Alquiler permitido')
} else {
    if (!disponible) {
        console.log('Disponible no se cumple')
    }

    if (!(edad >= 16)) {
        console.log('Edad no se cumple')
    }

    if (!(saldo >= 3.49)) {
        console.log('Saldo no se cumple')
    }
}