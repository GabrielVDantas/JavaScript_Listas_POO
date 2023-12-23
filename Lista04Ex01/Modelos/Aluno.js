import PromptSync from 'prompt-sync';
import Pessoa from './Pessoa.js';
const prompt = PromptSync();


export default class Aluno extends Pessoa {
    #ra;
    #curso;
    constructor(cpf, nome, ra, curso) {
        super(cpf, nome);
        this.#ra = ra;
        this.#curso = curso;
    }
    
    toString() {
        return `${super.toString()}, RA: ${this.#ra}, Curso: ${this.#curso}.`;
    }

}