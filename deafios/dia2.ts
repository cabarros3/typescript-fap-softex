// calculadora de imc

type Medidas = {
    peso: number,
    altura: number;
};

let minhasMedidas: Medidas = {
    peso: 83.3,
    altura: 1.64,
};

let imc: number = minhasMedidas.peso / minhasMedidas.altura**2;

console.log(`Seu IMC é ${imc.toFixed(2)}`);

if (imc < 18.5){
    console.log("Seu IMC indica Magreza");
}
if (imc >=18.5 && imc <= 29.9){
    console.log("Seus IMC indica peso normal");
}
if (imc >= 30){
    console.log("Seu IMC indica Obesidade");
};