import PromptSync from 'prompt-sync';
import VerificaExistencia from './VerificaExistencia.js';
const prompt = PromptSync();

export default class Pessoa {
    #codigo;
    #nome;
    #automoveis;
    constructor(codigo, nome, automoveis) {
        this.#codigo = codigo;
        this.#nome = nome;
        this.#automoveis = [];
    }

    
    static atribuiAutomovel(pessoas, novoAutomovel) {
        const pessoa = VerificaExistencia.verificaPessoaExiste(pessoas);
        pessoa.#automoveis.push(novoAutomovel);
        console.log("Automóvel atribuído com sucesso!");
    }         

    static mostraPessoas(pessoas) {
        pessoas.forEach(pessoa => {
            console.log(pessoa.toString());
        });
    }

    toString() {
        return `Código: ${this.#codigo}, Nome: ${this.#nome}.`;
    }

    get codigo() {
        return this.#codigo
    }

    get automoveis() {
        return this.#automoveis;
    }
}