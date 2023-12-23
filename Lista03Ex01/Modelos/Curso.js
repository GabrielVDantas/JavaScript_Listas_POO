import PromptSync from 'prompt-sync';
import VerificaExistencia from './VerificaExistencia.js';
const prompt = PromptSync();

export default class Curso {
    #codigo;
    #nome;
    #cargaHoraria;
    #alunos;
    constructor(codigo, nome, cargaHoraria, alunos) {
        this.#codigo = codigo;
        this.#nome = nome;
        this.#cargaHoraria = cargaHoraria;
        this.#alunos = [];
    }

    static adicionaAluno(cursoProcurado, novoAluno) {
        if (cursoProcurado) {
            cursoProcurado.alunos.push(novoAluno);
            console.log("Aluno adicionado com sucesso!"); 
        }  
    }

    static removeAluno(cursoProcurado, aluno) {
        if (cursoProcurado && aluno) {
            let indexDoAluno = cursoProcurado.alunos.indexOf(aluno);
            cursoProcurado.alunos.splice(indexDoAluno, 1);
            console.log("Aluno removido do curso com sucesso!");
        }
        
    }

    static mostraCursos(cursos) {
        cursos.forEach(curso => {
            console.log(curso.toString());
        });
    }

    static mostraAlunosDoCurso(cursos) {
        let cursoProcurado = VerificaExistencia.verificaCursoExiste(cursos);
        console.log(cursoProcurado.toString());
        console.log(cursoProcurado.alunos.toString());
    }

    toString() {
        return `Código: ${this.#codigo}, nome: ${this.#nome}, carga horária: ${this.#cargaHoraria}.`;
    }

    get codigo() {
        return this.#codigo;
    }

    get alunos() {
        return this.#alunos;
    }
}