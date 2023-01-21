// funcion para pedir el nombre del alumno.

function nombreUsuario () {
    let nombre = prompt ("por favor indique su nombre y apellido");
    console.log ("El nombre ingresado es " + nombre);
}

nombreUsuario ();

// funcion para pedir las notas del alumno y sacar un promedio.

function promedioNota (nota1, nota2, nota3) {
    let promedio = (nota1 + nota2 + nota3) / "3";
    console.log (promedio);
    
    if (promedio <= 6) {
        alert ("Lo siento, el promedio no te permite aprobar el curso, tu nota es un " + promedio);
    } else {
        alert ("Felicidades! has aprobado el curso!, tu nota es un " + promedio);
    }

    return promedio;
}

const nota1 = parseInt ( prompt ("indique su primer nota"));
const nota2 = parseInt ( prompt ("indique su segunda nota"));
const nota3 = parseInt ( prompt ("indique su tercer nota"));

let resultadoDeLaSuma = promedioNota (nota1, nota2, nota3);





