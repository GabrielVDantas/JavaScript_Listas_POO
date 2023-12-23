import PromptSync from 'prompt-sync';
import Apolice from './Modelos/Apolice.js';
const prompt = PromptSync();

const apolices = [];
let escolha;

do {
    const menu = prompt("Digite: 1-Criar apólice 2-Ver dados de uma apólice 3-Sair ");
    escolha = parseInt(menu);
    switch (escolha) {
        case 1:
            let novaApolice = Apolice.pedeInfo();
            apolices.push(novaApolice);
            break;
        case 2:
            Apolice.verDados(apolices);
            break;
        case 3:
            console.log("Saindo...");
            break;
        default:
            console.log("Você digitou uma opção inválida, tente novamente!");
            break;
    }
} while (escolha != 3);
