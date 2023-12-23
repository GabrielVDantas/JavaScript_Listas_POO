import PromptSync from 'prompt-sync';
import Curso from './Modelos/Curso.js';
import Aluno from './Modelos/Aluno.js';
import ObjetoFactory from './Modelos/ObjetoFactory.js';
import VerificaExistencia from './Modelos/VerificaExistencia.js';
const prompt = PromptSync();

let cursos = [];
let escolha;
do {
    let menu = prompt("Digite: 1-Add curso 2-Add aluno 3-Remover aluno de um curso 4-Mostrar os cursos" +
                        " 5-Mostrar os alunos de determinado curso 6-Sair ");
    escolha = parseInt(menu);
    switch (escolha) {
        case 1:
            const novoCurso = ObjetoFactory.pedeInfoCurso(1);
            cursos.push(novoCurso);
            break;
        case 2:
            const novoAluno = ObjetoFactory.pedeInfoAluno(2);
            const cursoAddAluno = VerificaExistencia.verificaCursoExiste(cursos);
            Curso.adicionaAluno(cursoAddAluno, novoAluno);
            break;
        case 3:
            const cursoRemoveAluno = VerificaExistencia.verificaCursoExiste(cursos);
            const alunoParaRemover = VerificaExistencia.verificaAlunoExiste(cursoRemoveAluno);
            Curso.removeAluno(cursoRemoveAluno, alunoParaRemover);
            break;
        case 4:
            Curso.mostraCursos(cursos);
            break;
        case 5:
            Curso.mostraAlunosDoCurso(cursos);
            break;
            case 6:
            console.log("Saindo...");
            break;
        default:
            console.log("Você digitou uma opção inválida, tente novamente!");
            break;
    }
} while (escolha != 6);
