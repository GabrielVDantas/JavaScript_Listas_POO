import PromptSync from 'prompt-sync';
import VerificaExistencia from './VerificaExistencia.js';
const prompt = PromptSync();

export default class Automovel {
    #marca;
    #modelo;
    constructor(marca, modelo) {
        this.#marca = marca;
        this.#modelo = modelo;
    }

    static mostraAutomoveis(pessoas) {
        const pessoa = VerificaExistencia.verificaPessoaExiste(pessoas);
        console.log(pessoa.toString());
        console.log(pessoa.automoveis.toString());
        
    }

    toString() {
        return `Marca: ${this.#marca}, Modelo: ${this.#modelo}.`;
    }
}