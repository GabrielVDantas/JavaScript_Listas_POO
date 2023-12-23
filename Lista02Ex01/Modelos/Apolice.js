import PromptSync from 'prompt-sync';
const prompt = PromptSync();

export default class Apolice {
    #numero;
    #nome;
    #idade;
    #sexo;
    #valorAutomovel;

    constructor(numero, nome, idade, sexo, valorAutomovel) {
        this.#numero = numero;
        this.#nome = nome;
        this.#idade = idade;
        this.#sexo = sexo;
        this.#valorAutomovel = valorAutomovel;
    }

    static pedeInfo() {
        let numeroDigitado = prompt("Digite o número: ");
        numeroDigitado = parseInt(numeroDigitado);
        const nomeDigitado = prompt("Digite o nome: ");
        let idadeDigitada = prompt("Digite o idade: ");
        idadeDigitada = parseInt(idadeDigitada);
        const sexoDigitado = prompt("Digite o sexo: ");
        let valorAutomovelDigitado = prompt("Digite o valor do automóvel: ");
        valorAutomovelDigitado = parseFloat(valorAutomovelDigitado);
        console.log("Apólice criada com sucesso!");
        return new Apolice(numeroDigitado, nomeDigitado, idadeDigitada, sexoDigitado, valorAutomovelDigitado);
    }

    static verDados(apolices) {
        let numeroBusca = prompt("Digite o número da apólice para ser procurada: ");
        numeroBusca = parseInt(numeroBusca);
        let apoliceEncontrada = false;
        apolices.forEach(apolice => {
            if (apolice.numero === numeroBusca) {
                apoliceEncontrada = true;
                console.log(apolice.toString());
            }
        });
        if (!apoliceEncontrada) {
            console.log("Apólice não encontrada!");
        }
    }

    calculaValor() {
        if(this.#sexo === "M" || this.#idade <= 25) {
            return this.#valorAutomovel * 0.10;
        } else if(this.#sexo === "M" || this.#idade > 25) {
            return this.#valorAutomovel * 0.05;
        } else if(this.#sexo === "F") {
            return this.#valorAutomovel * 0.02;
        }
    }

    toString() {
        return `${this.#numero}, ${this.#nome}, ${this.calculaValor()}.`;
    }

    get numero() {
        return this.#numero;
    }

}