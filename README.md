# Exercícios de Typescript

## [Exercício 1 - Declarar variáveis e tipos](https://github.com/cabarros3/typescript-fap-softex/blob/master/var_and_types.ts)
Declaram-se variáveis de forma semelhante ao JavaScript, entretanto a diferença está na declaração dos tipos. Em typescript, usa-se ```let x: number = 5```, ou seja, declara-se a variável e acrescenta-se dois pontos e o tipo da variável para então realizar inicializar ou atribuir valor a ela.

- Exemplos

```
let num: number = 10;
console.log(typeof num);

const userName: string = "Fulando da Silva";
console.log(typeof userName);

const cpf: string = "000.000.000-00";
console.log(typeof cpf);

let trueOrFalse: boolean = true;
console.log(typeof trueOrFalse)

```

## [Exercício 2 - Criar tipos personalizados]()
Declarar tipos personalizados também pode ser conhecido como *alias*. Um tipo personalizado é um agrupamento de tipagens dentro de um objeto que podem ser chamados por apelido (alias) sem a necessidade de serem tipados todas as vezes que forem utilizados. Contudo, tem que conter a mesma quantidade de tipos e as mesmas propriedades.

- Exemplos
```
// criando o tipo Pessoa
type Pessoa = {
  nome: string,
  idade: number,
  cpf: string,
  isPcd: boolean;
};

// usando o tipo Pessoa
let cadastro: Pessoa = {
  nome: "Fulano da Silva",
  idade: 35,
  cpf: "000.000.000-00",
  isPcd: false,
};
```
Ou seja, criamos um tipo *Pessoa* que recebe um objeto e esse objeto contém as propriedades e os tipos delas, logo em seguida, usamos o tipo pessoa na declaração do objeto *cadastro* que tem as mesmas propriedades e tipos definidos em pessoa e que agora receberá apenas os valores. Depois nós podemos verificar os tipos de cada propriedade que estão dentro do tipo object.
```
console.log(typeof cadastro.nome);
console.log(typeof cadastro.isPcd);
```


