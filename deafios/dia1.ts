/*

// calculadora de conversão de temperatura
// converter de Fahrenheit para celcius
//  f = (c*9/5) + 32   9/5= 1,8
// c = (f - 32) * 5/9   5/9 = 0,55

// declarando variáveis e seus tipos
let c: number = 32.2;
let f: number = 90;
let cTof: number;
let fToc: number;

// calculando

cTof = (c * 1.8) + 32
//console.log(cTof)
fToc = (f - 32) * (5/9)
//console.log(fToc.toFixed(2))

// resultado

console.log(`A temperatura em Celcius é de ${c} graus, o valor convertido para Fahrenheit é de ${cTof.toFixed(1)}`)
console.log(`A temperatura em Fahrenheit é de ${f}, o valor convertido para Celcius é de ${fToc.toFixed(1)} graus`)

*/

// usando tipo personalizado e funções



// function square(numero: number): number {
//     return numero * numero
// };

// console.log(square(10));

type Pessoa = {
    nome: string,
    idade: number,
    emprego: boolean,
    salario: number;
};

let cadastro: Pessoa = {
    nome: "Camilla",
    idade: 29,
    emprego: false,
    salario: 10.000,
};

console.log(typeof cadastro);

if (cadastro.emprego == true && cadastro.salario >= 5.000) {
    console.log(`${cadastro.nome}, empréstimo concedido!`)
}
else{
    console.log(`${cadastro.nome}, empréstimo negado!`)
};


type Temperaturas = {
    celcius: number,
    fahrenheit: number;
};


let resgistraTemperatura: Temperaturas = {
    celcius: 32,
    fahrenheit: 90,
};

console.log(typeof resgistraTemperatura.celcius);

let cToF: number = (resgistraTemperatura.celcius * 1.8) + 32
console.log(typeof cToF)
let fToC: number = (resgistraTemperatura.fahrenheit - 32) * (5/9)
console.log(fToC)






