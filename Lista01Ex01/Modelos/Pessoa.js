import PromptSync from 'prompt-sync';
const prompt = PromptSync();

export default class Pessoa {
    #cpf;
    #nome;
    #sexo;
    #idade;
    constructor(cpf, nome, sexo, idade) {
        this.#cpf = cpf;
        this.#nome = nome;
        this.#sexo = sexo;
        this.#idade = idade;
    }

    static pedeInfo() {
        const pessoaCpf = prompt("Digite o cpf: ");
        const pessoaNome = prompt("Digite o nome: ");
        const pessoaSexo = prompt("Digite o sexo: ");
        const pessoaIdade = prompt("Digite a idade: ");
        return new Pessoa(pessoaCpf, pessoaNome, pessoaSexo, pessoaIdade);
    }

    toString() {
        return `${this.#cpf}, ${this.#nome}, ${this.#sexo}, ${this.#idade}.`; 
    }
}
