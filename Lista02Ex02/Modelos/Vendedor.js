import PromptSync from 'prompt-sync';
const prompt = PromptSync();

export default class Vendedor {
    #codigo;
    #nome;
    #percentualComissao;

    constructor(codigo, nome, percentualComissao) {
        this.#codigo = codigo;
        this.#nome = nome;
        this.#percentualComissao = percentualComissao;
    }

    static pedeInfo() {
        let codigoDigitado = prompt("Digite o código: ");
        codigoDigitado = parseInt(codigoDigitado);
        const nomeDigitado = prompt("Digite o nome: ");
        let percentualComissaoDigitada = prompt("Digite o percentual de comissão: ");
        percentualComissaoDigitada = parseFloat(percentualComissaoDigitada);

        console.log("Vendedor cadastrado com sucesso!");
        return new Vendedor(codigoDigitado, nomeDigitado, percentualComissaoDigitada);
    }

    static realizaVenda(vendedores) {
        let codigoEspecifico = prompt("Digite o código do vendedor responsável pela venda: ");
        codigoEspecifico = parseInt(codigoEspecifico);
        let vendedorEncontrado = false;
        vendedores.forEach(vendedor => {
            if (vendedor.codigo === codigoEspecifico) {
                vendedorEncontrado = true;
                let valorDaVenda = prompt("Digite o valor da venda: ");
                valorDaVenda = parseFloat(valorDaVenda);
                let valorDesconto = prompt("Digite o valor do desconto: ");
                valorDesconto = parseFloat(valorDesconto);
                console.log(vendedor.toString(valorDaVenda, valorDesconto));
            }
        });
        if(!vendedorEncontrado) {
            console.log("Não foi econtrado nenhum vendedor com esse código!");
        }
    }

    calculoComissao(valorDaVenda) {
        return valorDaVenda * (this.#percentualComissao / 100);
    }

    comissaoApagar(valorDaVenda, valorDesconto) {
        return this.calculoComissao(valorDaVenda) - valorDesconto;
    }

    toString(valorDaVenda, valorDesconto) {
        return `Código: ${this.#codigo}, Nome: ${this.#nome}, Valor da venda: ${valorDaVenda}, Comissão a pagar: ${this.comissaoApagar(valorDaVenda, valorDesconto)}.`;
    }

    get codigo() {
        return this.#codigo;
    }
}