const readline = require('readline-sync');

class Pedido {
    constructor() {
        this.itens = [];
        this.valorTotal = 0;
        this.status = false;
    }

    adicionarItem(item, valor) {
        this.itens.push({ item, valor });
        this.valorTotal += valor;
    }
}

class Restaurante {
    constructor() {
        this.pedidos = [];
    }

    fazerPedido() {
        const pedido = new Pedido();
        let continuar = true;

        console.log("Faça seu pedido ||| 1 - Para Sair:");

        while (continuar) {
            console.log('----- 1 Para Sair -------')
            const item = readline.question("Informe o item: ");
            if (item.toLowerCase() === "1") {
                continuar = false;
            } else {
                const valor = parseFloat(readline.question("Digite o preco: " + "\n"));
                pedido.adicionarItem(item, valor);
                
            }
        }
        console.log("Pedido realizado com sucesso!");
        console.log("Valor Total R$: " +pedido.valorTotal )
        this.pedidos.push(pedido);
    }
}

const restaurante = new Restaurante();
restaurante.fazerPedido();
restaurante.pedidos.forEach(pedido => {
    console.log("Itens do pedido:");
    pedido.itens.forEach(item => {
        console.log("Item: " + item.item + ", Valor: R$" + item.valor);
        
    });
});
git