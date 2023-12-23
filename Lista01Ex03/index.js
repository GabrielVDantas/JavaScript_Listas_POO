import PromptSync from 'prompt-sync';
const prompt = PromptSync();
import Funcionario from './Modelos/Funcionario.js';

const funcionarios= [];
let escolha;

do {
    const menu = prompt("Digite: 1-Adicionar funcionário 2-Ver funcionários 3-Alterar remuneração 4-Sair ");
    escolha = parseInt(menu);

    switch (escolha) {
        case 1:
            const novoFuncionario = Funcionario.pedeInfo();
            funcionarios.push(novoFuncionario);
            console.log("Funcionário adicionado!");
            break;
        case 2:
            funcionarios.forEach(funcionario => {
                console.log(funcionario.toString());
            });
            break;
        case 3:
            Funcionario.alteraRemuneracao(funcionarios);
            break;
        case 4:
            console.log("Saindo...");
            break;
        default:
            console.log("Você digitou uma opção que não existe, tente novamente!");
            break;
    }
} while (escolha != 4);



