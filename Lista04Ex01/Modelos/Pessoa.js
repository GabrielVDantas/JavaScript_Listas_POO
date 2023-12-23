import PromptSync from 'prompt-sync';
const prompt = PromptSync();

export default class Pessoa {
    #cpf;
    #nome;
    constructor(cpf, nome) {
        this.#cpf = cpf;
        this.#nome = nome;
    }

    static mostrarPessoas(pessoas) {
        pessoas.forEach(pessoa => {
            console.log(pessoa.toString());
        });
    }

    toString() {
        return `CPF: ${this.#cpf}, Nome: ${this.#nome}.`;
    }

    get cpf() {
        return this.#cpf;
    }

    get nome() {
        return this.#nome;
    }
}