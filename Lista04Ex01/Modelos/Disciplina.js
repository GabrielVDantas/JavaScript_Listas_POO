import PromptSync from 'prompt-sync';
const prompt = PromptSync();

export default class Disciplina {
    #codigo;
    #nome;
    constructor(codigo, nome) {
        this.#codigo = codigo;
        this.#nome = nome;
    }

    toString() {
        return `Código: ${this.#codigo}, Nome: ${this.#nome}.`;
    }

    get codigo() {
        return this.#codigo;
    }
}