import PromptSync from 'prompt-sync';
import Aluno from './Aluno.js';
const prompt = PromptSync();


export default class AlunoPosGraduacao extends Aluno {
    #posGraduacao;
    constructor(nome, ra, curso, posGraduacao) {
        super(nome, ra, curso);
        this.#posGraduacao = posGraduacao;
    }

    toString() {
        return `${super.toString()} RA: ${this.#posGraduacao}.`;
    }

}