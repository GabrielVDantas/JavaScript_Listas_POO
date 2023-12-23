import PromptSync from 'prompt-sync';
import Professor from './Modelos/Professor.js';
import Pessoa from './Modelos/Pessoa.js';
import ObjetoFactory from './Modelos/ObjetoFactory.js';

const prompt = PromptSync();

let pessoas = [];
let disciplinasCriadas = [];
let escolha;
do {
    let menu = prompt("Digite: 1-Add disciplina 2-Add professor 3-Add atendente 4-Add aluno" +
                        " 5-Add disciplina ao professor 6-Mostrar as pessoas 7-Sair ");
    escolha = parseInt(menu);
    switch (escolha) {
        case 1:
            const novaDisciplina = ObjetoFactory.adicionaObjetos(1);
            disciplinasCriadas.push(novaDisciplina);
            break;
        case 2:
            const novoProfessor = ObjetoFactory.adicionaObjetos(2);
            pessoas.push(novoProfessor);
            break;
        case 3:
            const novoAtendente = ObjetoFactory.adicionaObjetos(3);
            pessoas.push(novoAtendente);
            break;
        case 4:
            const novoAluno = ObjetoFactory.adicionaObjetos(4);
            pessoas.push(novoAluno);
            break;
        case 5:
            Professor.adicionaDisciplina(pessoas, disciplinasCriadas);
            break;
        case 6:
            Pessoa.mostrarPessoas(pessoas);
            break;
        case 7:
            console.log("Saindo...");
            break;
        default:
            console.log("Você digitou uma opção inválida, tente novamente!");
            break;
    }
} while (escolha != 7);
