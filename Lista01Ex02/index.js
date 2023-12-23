import PromptSync from 'prompt-sync';
const prompt = PromptSync();
import Aluno from "../Lista01Ex02/Modelos/Aluno.js";

const alunos = [];
let escolha;

do {
    const menu = prompt("Digite: 1-Adicionar aluno 2-Ver alunos 3-Sair ");
    escolha = parseInt(menu);

    switch (escolha) {
        case 1:
            const novoAluno = Aluno.pedeInfo();
            alunos.push(novoAluno);
            console.log("Aluno adicionado!");
            novoAluno.aprovacaoDoAluno();
            break;
        case 2:
            alunos.forEach(aluno => {
                console.log(aluno.toString());
            });
            break;
        case 3:
            console.log("Saindo...");
            break;
        default:
            console.log("Você digitou uma opção indisponível, tente novamente!");
            break;
    }
} while (escolha != 3);
