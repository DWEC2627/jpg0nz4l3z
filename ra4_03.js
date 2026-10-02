let pelicula = {
    titulo: "Interestellar",
    director: "Christopher Nolan",
    anio: 2014,
    genero: "Ciencia ficción",
    duracion: "169 minutos",
    disponible: true,
    ficha : function() {
        return this.titulo + " " + this.director + " " + this.anio + " " + this.genero + " " + this.duracion + " " + (this.disponible? "si": "no");
    },
    comprobarDisponibilidad: function(){
        return this.disponible? "si": "no";
    }
}

console.log(pelicula.ficha());

pelicula.disponible = false;
console.log(pelicula.ficha());

pelicula.disponible = true;
console.log("Pelicula.disponible otra vez true:"+ pelicula.ficha());

delete pelicula.genero;
console.log(pelicula.ficha());

//CLIENTE
let cliente = {
    nombre: "Laura",
    número_de_cliente: 27,
    peliculas_alquiladas: 2,
    puedeAlquilar: function(){
        return this.peliculas_alquiladas < 3 ? true: false;
    }
}

console.log(cliente.puedeAlquilar())

//REALIZAR ALQUILER
function alquilar(){
    let puedeAlquilar = cliente.puedeAlquilar() && pelicula.disponible ? true: false;
    if(puedeAlquilar){
        cliente.peliculas_alquiladas += 1;
        pelicula.disponible = false;
    }
}

alquilar();
console.log("Películas alquiladas por el cliente: " + cliente.peliculas_alquiladas + "\n" + pelicula.ficha());

//CREAR MUCHAS PELICULAS

function peliculaConstructor(titulo, director, anio, genero, duracion, disponible){
    this.titulo = titulo;
    this.director = director;
    this.anio = anio;
    this.genero = genero;
    this.duracion = duracion;
    this.disponible = disponible;
    this.ficha = function() {
        return this.titulo + " " + this.director + " " + this.anio + " " + this.genero + " " + this.duracion + " " + (this.disponible? "si": "no");
    };
    this.comprobarDisponibilidad = function(){
        return this.disponible? "si": "no";
    }
}

const matrix = new peliculaConstructor("The Matrix", "Lana y Lilly Wachowski", "1999", "asf", "136 minutos", "afasf");
console.log(matrix.ficha())

const pulpFiction = new peliculaConstructor("Pulp Fiction", "Quentin Tarantino", "1994", "asf", "154 minutos", "asdf");
console.log(pulpFiction.ficha());

//INVESTIGAR OBJETOS
console.log(Object.values(matrix).toString());
console.log(Object.values(matrix));
console.log(JSON.stringify(matrix));