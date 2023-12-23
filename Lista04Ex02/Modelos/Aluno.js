import PromptSync from 'prompt-sync';;
const prompt = PromptSync();


export default class Aluno {
    #nome;
    #ra;
    #curso;
    constructor(nome, ra, curso) {
        this.#nome = nome;
        this.#ra = ra;
        this.#curso = curso;
    }

    static verInfo(alunos) {
        alunos.forEach(aluno => {
            console.log(aluno.toString());
        });
    }

    toString() {
        return `RA: ${this.#ra}, Curso: ${this.#curso}`;
    }

}