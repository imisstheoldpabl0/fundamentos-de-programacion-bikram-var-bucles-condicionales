/* ITERACIONES - PAIR PROGRAMMING */
/* VARIABLES */

//1
let variableSinValor;

//2
let booleano1 = true;
let booleano2 = false;

//3
const PI = 3.14;

//4
const TAU = PI*2;

/* BOOLEANOS */
//5
var booleanoAnd = (booleano1 == booleano2);

//6
var booleanoNot = !booleano1;

//7
var booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && booleano2));

/* OPERADORES */
//8
var incrementarDesp = 2;
var resultadoDesp = incrementarDesp++;

//9
var incrementarAntes = 2;
var resultadoAntes = ++incrementarAntes;

//10
var contarHasta10_2 = 0;
for (let i = 0; i < 11; i++) {
    contarHasta10_2 = i;
}

//11
var postI = 0;
var postJ = 0;
for (let i = 0; i < 11; i++) {
    postI += postJ++;
}

//12
var sumaPares = 0;
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        sumaPares += i;
    }
}

/* ITERACIONES - PROYECTO INDIVIDUAL */
/* VARIABLES */

//13
let variableValorNumerico = 0;

//14
const MiNombre = "Pablo"

//15
const MiNumeroFav = 12;

/* BOOLEANOS */
//16
let booleanoOr = (booleano1 || booleano2);

//17
var booleanoMix1 = (booleano1 && (TAU/2) === PI) || (variableValorNumerico => MiNumeroFav);

//18
var seisNoEsNueve = 6 != 9;

//19
var booleanoMix2 = variableValorNumerico > 0 || variableValorNumerico < -(MiNumeroFav * TAU);

//20
var valorSuma = (MiNumeroFav + variableValorNumerico);

//21
var valorResta = (MiNumeroFav - variableValorNumerico);

//22
var valorMultiplicacion = (MiNumeroFav * variableValorNumerico);

//23
var valorDivision = (MiNumeroFav / 3);

/* BUCLES */
//24
var contarHasta10 = 0;
    for (let i = 0; i < 11; i++) {
        contarHasta10 = i;
    }

//25
var preI = 0;
var preJ = 0;
    for (let i = 0; i < 11; i++) {
        preI += ++preJ;
    }

//26
var sumaImpares = 0;
    for (let i = 0; i < 10; i++) {
        if (i % 2 == 1) {
            sumaImpares += i;
        }
    }