import PromptSync from 'prompt-sync';
import Pessoa from './Pessoa.js';
const prompt = PromptSync();


export default class Funcionario extends Pessoa {
    #numeroCracha;
    #salario;
    constructor(cpf, nome, numeroCracha, salario) {
        super(cpf, nome);
        this.#numeroCracha = numeroCracha;
        this.#salario = salario;
    }

    toString() {
        return `${super.toString()}, Número do crachá: ${this.#numeroCracha}, salário: ${this.#salario}.`;
    }

    get numeroCracha() {
        return this.#numeroCracha;
    }

    get salario() {
        return this.#salario;
    }
}