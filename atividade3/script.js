
let leitor = require("readline-sync")

function calculaAreas () {
let input 

    while(input!=0){
        console.log("Qual operação você deseja realizar?")
        console.log("1 - Área do círculo");
        console.log("2 - Área do retângulo");
        console.log("3 - Área do triângulo");
        console.log("0 - Sair");

        input = leitor.questionInt()

        switch(input) {
            case 1:
                let raio = leitor.questionInt("Raio do círculo: ")
                console.log("A área do círuclo é: "+raio*raio*3.14)
                break;

            case 2:
                let lado1 = leitor.questionInt("Lado 1 do reatângulo: ")
                let lado2 = leitor.questionInt("Lado 2 do reatângulo: ")

                console.log("A área do reatângulo é: "+lado1*lado2)
                break;

            case 3:
                let altura = leitor.questionInt("Altura do triângulo: ")
                let base = leitor.questionInt("Base do triângulo: ")

                console.log("A área do triângulo é: " + (base*altura)/2)

            case 0:
                console.log("Tchauuuuu :)")
                process.exit(0)

            default:
                console.log("Opção inválida");
        }

    }
}

calculaAreas()