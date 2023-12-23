import PromptSync from 'prompt-sync';
import Automovel from './Automovel.js';
import Pessoa from './Pessoa.js';
const prompt = PromptSync();

export default class ObjetoFactory {
    static pedeInfoPessoa() {
        let codigoDigitado = prompt("Digite o código: ");
        codigoDigitado = parseInt(codigoDigitado);
        const nomeDigitado = prompt("Digite o nome: ");
        console.log("Pessoa adicionada com sucesso!");
        return new Pessoa(codigoDigitado, nomeDigitado);
    }

    static pedeInfoAutomovel() {
        const marcaDigitada = prompt("Digite a marca: ");
        const modeloDigitado = prompt("Digite o modelo: ");
        return new Automovel(marcaDigitada, modeloDigitado);
    }

    static criaObjeto(objeto) {
        switch (objeto) {
            case 1:
                const novaPessoa = this.pedeInfoPessoa();
                return novaPessoa;
            case 2:    
                const novoAluno = this.pedeInfoAutomovel();
                return novoAluno;
        }
    }
}