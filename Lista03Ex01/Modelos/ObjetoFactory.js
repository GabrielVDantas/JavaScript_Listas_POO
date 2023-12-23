import PromptSync from 'prompt-sync';
import Curso from './Curso.js';
import Aluno from './Aluno.js';
const prompt = PromptSync();

export default class ObjetoFactory {
    static pedeInfoAluno() {
        let raAlunoDigitado = prompt("Digite o ra: ");
        raAlunoDigitado = parseInt(raAlunoDigitado);
        const nomeAlunoDigitado = prompt("Digite o nome: ");
        console.log("Aluno criado com sucesso!");
        return new Aluno(raAlunoDigitado, nomeAlunoDigitado);
    }

    static pedeInfoCurso() {
        let codigoCursoDigitado = prompt("Digite o código: ");
        codigoCursoDigitado = parseInt(codigoCursoDigitado);
        const nomeCursoDigitado = prompt("Digite o nome: ");
        let cargaHorariaCursoDigitada = prompt("Digite a carga horária: ");
        cargaHorariaCursoDigitada = parseInt(cargaHorariaCursoDigitada);
        console.log("Curso criado com sucesso!");
        return new Curso(codigoCursoDigitado, nomeCursoDigitado, cargaHorariaCursoDigitada);
    }

    static criaObjeto(objeto) {
        switch (objeto) {
            case 1:
                const novoCurso = this.pedeInfoCurso();
                return novoCurso;
            case 2:    
                const novoAluno = this.pedeInfoAluno();
                return novoAluno;
        }
    }
}