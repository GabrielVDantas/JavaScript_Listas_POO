import PromptSync from 'prompt-sync';
import Funcionario from './Funcionario.js';
const prompt = PromptSync();


export default class Atendente extends Funcionario {
    #setor;
    #funcao;
    constructor(cpf, nome, numeroCracha, salario, setor, funcao) {
        super(cpf, nome, numeroCracha, salario);
        this.#setor = setor;
        this.#funcao = funcao;
    }

    toString() {
        return `${super.toString()}, Setor: ${this.#setor}, salário: ${this.#funcao}.`;   
    }
}