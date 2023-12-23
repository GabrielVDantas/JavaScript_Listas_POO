import PromptSync from 'prompt-sync';
import Vendedor from './Modelos/Vendedor.js';
const prompt = PromptSync();

let vendedores = [];
let escolha;
do {
    let menu = prompt("Digite: 1-Cadastrar Vendedor 2-Calcular venda 3-Sair ");
    escolha = parseInt(menu);
    switch (escolha) {
        case 1:
            let novoVendedor = Vendedor.pedeInfo();
            vendedores.push(novoVendedor);
            break;
        case 2:
            Vendedor.realizaVenda(vendedores);
            break;
        case 3:
            console.log("Saindo...");
            break;
        default:
            console.log("Você digitou uma opção inválida, tente novamente!");
            break;
    }
} while (escolha != 3);
