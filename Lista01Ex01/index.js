import PromptSync from 'prompt-sync';
const prompt = PromptSync();
import Pessoa from "../Lista01Ex01/Modelos/Pessoa.js";

let pessoas = [];
let escolha;
do {
    const menu = prompt("Digite: 1-Adicionar pessoa 2-Ver pessoas 3-Sair ");
    escolha = parseInt(menu);
    switch (escolha) {
        case 1:
            const novaPessoa = Pessoa.pedeInfo();
            pessoas.push(novaPessoa);
            break;
        case 2:
            pessoas.forEach(pessoa => {
                console.log(pessoa.toString());
            });
            break;
        case 3:
            console.log("Saindo...");
            break
        default:
            console.log("Você digitou uma opção que não está disponível!");
            break;
    }
} while (escolha != 3);
