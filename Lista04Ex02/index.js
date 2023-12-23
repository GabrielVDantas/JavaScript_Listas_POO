import PromptSync from 'prompt-sync';
import Aluno from './Modelos/Aluno.js';
import AlunoFactory from './Modelos/AlunoFactory.js';
const prompt = PromptSync();

let alunos = [];
let escolha;
do {
    let menu = prompt("1-Adicionar aluno 2-Ver alunos 3-Sair ");
    escolha = parseInt(menu);
    switch (escolha) {
        case 1:
            const novoAluno = AlunoFactory.criaAluno();
            alunos.push(novoAluno);
            break;
        case 2:
            Aluno.verInfo(alunos);
            break;
        case 3:
            console.log("Saindo...");
            break;
        default:
            console.log("Você digitou uma opção inválida, tente novamente!");
            break;
    }
} while (escolha != 3);
