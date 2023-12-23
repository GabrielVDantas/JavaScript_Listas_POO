import PromptSync from 'prompt-sync';
import Aluno from './Aluno.js';
const prompt = PromptSync();


export default class AlunoGraduacao extends Aluno {
    #graduacao;
    constructor(nome, ra, curso, graduacao) {
        super(nome, ra, curso);
        this.#graduacao = graduacao;
    }

    toString() {
        return `${super.toString()} RA: ${this.#graduacao}.`;
    }

}