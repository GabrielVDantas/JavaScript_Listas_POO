import PromptSync from 'prompt-sync';
import Professor from './Professor.js';
const prompt = PromptSync();

export default class VerificaExistencia {
    static verPessoaExiste(pessoas) {
        let cpfParaConferir = prompt("Digite o CPF do professor que receberá essa disciplina: ");
        let professor = pessoas.find(prof => prof instanceof Professor && prof.cpf === cpfParaConferir);
        if(professor) {
            console.log("Professor encontrado!");
            return professor;
        } else {
            console.log("Professor não encontrado!");
            return null;
        }
    }

    static verDisciplinaExiste(disciplinasCriadas) {
        let codigoParaConferir = prompt("Digite o código da disciplina: ");
        codigoParaConferir = parseInt(codigoParaConferir);
        let disciplinaEmQuestao = disciplinasCriadas.find(disciplina => disciplina.codigo === codigoParaConferir);
        if (disciplinaEmQuestao) {
            console.log("Disciplina encontrada!");
            return disciplinaEmQuestao;
        } else {
            console.log("Disciplina não encontrada!");
            return null;
        }
    }
}