let precioTexto = "3.99"
let diasTexto = "4"

console.log(typeof (precioTexto));
console.log(typeof (diasTexto));

let a = 1;
while (a <= 2) {
    //esto da error
    //calculo = precioTexto * diasTexto;

    let calculo;
    let variable1 = "variable 1";

    if (a == 2) {
        let variable2 = "Variable 2";
    }

    switch (a) {
        case 1:
            
            calculo = Number(precioTexto) * Number(diasTexto);
            //no se define la variable 2 debido al ambito, da error
            //console.log(`camino 1 - variable 1: ${variable1} - variable 2: ${variable2} `);

            break;
        case 2:
            calculo = Number(precioTexto) * Number(diasTexto);
            //variable 2 no está definida debido al ambito :3
            //console.log(`camino 2 - variable 1: ${variable1} - variable 2: ${variable2}`);
            break;
    }
    a++;
}