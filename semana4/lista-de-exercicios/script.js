/* Projeto da semana

    Aula 14:

    Exercícios de leitura de código

    1. A função que converte um valor em dolar para reais, considerando a cotação
    informada pelo usuário.
    A entrada da função é o valor em dolar, dentro do escopo da função é
    declarada uma variável do tipo const que recebe um valor informado pelo
    usuário e converte para Number. A função retorna o valor em reais da multiplicação
    do valor em dolar pela cotação.
    Fora da função, o valor de entrada declarado é 100, e então a
    saída da função é impressa no console.
    O valor impresso depende do valor informado pelo usuário, se for 5, derá impresso 500.

    2. A função recebe duas entradas, o tipo de investimento e o valor a ser investido,
    e retorna o valor após o investimento.
    No escopo da função é declarada uma variável do tipo let. Dependendo do tipo de investimento
    escolhido na entrada, o valor será multiplicado por uma porcentagem, e a função retornará
    esse valor. Cada valor está informado em cada case do switch.
    Fora da função foram declaradas duas variáveis do tipo const, que chamam a função com
    os valores de entrada. Depois esses valores são impressos no console.
    O primeiro valor impresso será 165, teve um rendimento de 10% de 150.
    O segundo valor será o alert "TIPO DE INVESTIMENTO INFORMADO INCORRETO!", porque nenhum
    dos cases do switch tem "Tesouro Direto", então é retornado o valor do default.

    3. São declaradas três arrays do tipo const, a primeira com elementos e as outras duas vazias.
    No for a variável elemento irá alterar em cada iteração para cada elemento do array numeros, e se
    o elemento dividido por 2 der zero, ou seja, for par, será adicionado no array1, se não, será adicionado
    no array2. Fora do for, será impresso no console "Quantidade total de números 14" "6" "8".

    4. São declaradas três variáveis, um array com elementos e duas do tipo let, uma infinity e outro zero.
    O for "varre" todos os elementos do array. Se o elemento for menor que a variável numero1, que é igual a infinity,
    numero1 será igual ao elemento. No segundo if, se o elemento for maior que o numero2 (0), numero2 será
    igual ao elemento. No final essas duas variáveis são impressas no console.
    Na primeira iteração numero1 será mudado para 25, pois infinito é maior que 25; e numero2 também será
    25, pois 25 é maior que 0. Na segunda iteração numero1 será 12 e numero2 continuará sendo 25, pois 12 é
    menor que 25. E assim por diante. numero1 será o menor valor e numero2 o maior valor.
    Os valores impressos serão: numero1 = -10 e numero2 = 1590.

    Exercícios de lógica de programação

    1. a) false
       b) false
       c) true
       d) true
       e) true

    2. O código não funciona, porque i não está aumentando de valor, é sempre zero,
    e no while i <= à variável quantidadeDeNumerosPares resulta sempre em um número a mais por i
    começar em zero. Se essa variável for 3, será impresso 0, 2, 4, 6.
       
    Código corrigido:
    */
function numerosPares(quantidadeDeNumerosPares) {
    let i = 0
    while (i < quantidadeDeNumerosPares) {
        console.log(i * 2)
        i++
    }
}
// 3.
function tipoTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        console.log("O triângulo é Escaleno")
    } else if (ladoA == ladoB && ladoA == ladoC && ladoB == ladoC) {
        console.log("O triângulo é Equilátero")
    } else {
        console.log("O triângulo é Isósceles")
    }
}

// 4.
function comparacaoNumeros(num1, num2) {
    if (num1 > num2) {
        console.log("O maior é: " + num1)
    } else if (num1 < num2) {
        console.log("O maior é: " + num2)
    } else {
        console.log("Os números são iguais: " + num1 + " e " + num2)
    }

    if (num1 % num2 === 0) {
        console.log(num1 + " é divisível por " + num2)
    }
    if (num2 % num1 === 0) {
        console.log(num2 + " é divisível por " + num1)
    }
    if (num1 % num2 !== 0) {
        console.log(num1 + " não é divisível por " + num2)
    }
    if (num2 % num1 !== 0) {
        console.log(num2 + " não é divisível por " + num1)
    }

    const diferenca = num1 - num2
    if (diferenca < 0) {
        console.log("A diferença entre eles é " + diferenca * -1)
    } else {
        console.log("A diferença entre eles é " + diferenca)
    }
}

/*---------------------------------------------------------------------
    Aula 15

    Exercícios de Funções

    1.
 */
function segundosNumeros(array) {
    let maiorNumero = 0
    let segundoMaiorNumero = 0
    let menorNumero = Infinity
    let segundoMenorNumero = Infinity
    let novoArray = []
    let indexMenor
    let indexMaior

    for (let numero of array) {
        if (numero > maiorNumero) {
            maiorNumero = numero
        }
        if (numero < menorNumero) {
            menorNumero = numero
        }
        novoArray.push(numero)
    }

    indexMenor = novoArray.indexOf(menorNumero)
    array = novoArray.splice(indexMenor, 1)
    indexMaior = novoArray.indexOf(maiorNumero)
    array = novoArray.splice(indexMaior, 1)

    for (let numero of novoArray) {
        if (numero > segundoMaiorNumero) {
            segundoMaiorNumero = numero
        }
        if (numero < segundoMenorNumero) {
            segundoMenorNumero = numero
        }
    }

    console.log(indexMaior, indexMenor, novoArray)
    console.log("O segundo maior número é " + segundoMaiorNumero)
    console.log("O segundo menor número é " + segundoMenorNumero)
}
const array = [5, 1, 6, 2, 8, 10, 4, 0]
console.log(segundosNumeros(array))