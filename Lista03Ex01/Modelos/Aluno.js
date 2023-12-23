import PromptSync from 'prompt-sync';
const prompt = PromptSync();

export default class Aluno {
    #ra;
    #nome;
    constructor(ra, nome) {
        this.#ra = ra;
        this.#nome = nome;
    }

    toString() {
        return `RA: ${this.#ra}, Nome: ${this.#nome}.`;
    }

    get ra() {
        return this.#ra;
    }
}