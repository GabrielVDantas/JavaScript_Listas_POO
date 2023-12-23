import PromptSync from 'prompt-sync';
import Pessoa from './Modelos/Pessoa.js';
import Automovel from './Modelos/Automovel.js';
import ObjetoFactory from './Modelos/ObjetoFactory.js';
import Transferir from './Modelos/Transferir.js';
const prompt = PromptSync();

let pessoas = [];
let escolha;
do {
    let menu = prompt("Digite: 1-Add pessoa 2-Add automóvel 3-Transferir automóvel 4-Mostrar todas as pessoas" +
                        " 5-Mostrar automóveis de determinada pessoa 6-Sair ");
    escolha = parseInt(menu);
    switch (escolha) {
        case 1:
            const novaPessoa = ObjetoFactory.pedeInfoPessoa(1);
            pessoas.push(novaPessoa);
            break;
        case 2:
            const novoAutomovel = ObjetoFactory.pedeInfoAutomovel(2);
            Pessoa.atribuiAutomovel(pessoas, novoAutomovel);
            break;
        case 3:
            Transferir.transfereAutomovel(pessoas);
            break;
        case 4:
            Pessoa.mostraPessoas(pessoas);
            break;
        case 5:
            Automovel.mostraAutomoveis(pessoas);
            break;
            case 6:
            console.log("Saindo...");
            break;
        default:
            console.log("Você digitou uma opção inválida, tente novamente!");
            break;
    }
} while (escolha != 6);
