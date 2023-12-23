import PromptSync from 'prompt-sync';
const prompt = PromptSync();

export default class Funcionario {
    #cracha;
    #nome;
    #vinculo;
    #valorPorHora;
    #totalDeHoras;
    #salario;
    #desconto;

    constructor(cracha, nome, vinculo, valorPorHora, totalDeHoras, salario, desconto) {
        this.#cracha = cracha;
        this.#nome = nome;
        this.#vinculo = vinculo;
        this.#valorPorHora = valorPorHora;
        this.#totalDeHoras = totalDeHoras;
        this.#salario= salario;
        this.#desconto = desconto;
    }

    static pedeInfo() {
        const cracha = prompt("Digite o crachá: ");
        const nome = prompt("Digite o nome: ");
        const vinculo = prompt("Digite o vínculo: ");
        let valorPorHora, valorPorHoraN, totalDeHoras, totalDeHorasN, salario, salarioN;
        if (vinculo === "H") {
            valorPorHora = prompt("Digite o valor por hora: ");
            valorPorHoraN = parseFloat(valorPorHora);
            totalDeHoras = prompt("Digite o total de horas: ");
            totalDeHorasN = parseInt(totalDeHoras);
        } else {
            salario = prompt("Digite o salário: ");
            salarioN = parseFloat(salario);
        }
        const desconto = prompt("Digite o desconto: ");
        const descontoN = parseFloat(desconto);
        if (vinculo === "H") {
            return new Funcionario(cracha, nome, vinculo, valorPorHoraN, totalDeHorasN, null, descontoN)
        } else {
            return new Funcionario(cracha, nome, vinculo, null, null, salarioN, descontoN);
        }
    }

    salarioFuncionario() {
        if (this.#vinculo === "H") {
            return (this.#valorPorHora * this.#totalDeHoras) - this.#desconto;
        } else {
            return this.#salario - this.#desconto;
        }
    }

    static alteraRemuneracao(funcionarios) {
        const crachaDigitado = prompt("Digite o crachá do funcionário: ")
            let funcionarioEmQuestao;
            funcionarios.forEach(funcionario => {
                if(funcionario.cracha === crachaDigitado) {
                    funcionarioEmQuestao = funcionario;
                }
        });
        let novoValorPorHora, novoValorPorHoraN, novoTotalDeHoras, novoTotalDeHorasN, novoSalario, novoSalarioN;
        if (funcionarioEmQuestao.vinculo === "H") {
            novoValorPorHora = prompt("Digite o novo valor por hora: ");
            novoValorPorHoraN = parseFloat(novoValorPorHora);
            funcionarioEmQuestao.valorPorHora = novoValorPorHoraN;
            novoTotalDeHoras = prompt("Digite o novo total de horas: ");
            novoTotalDeHorasN = parseInt(novoTotalDeHoras);
            funcionarioEmQuestao.totalDeHoras = novoTotalDeHorasN;
        } else {
            novoSalario = prompt("Digite o novo salário: ");
            novoSalarioN = parseFloat(novoSalario);
            funcionarioEmQuestao.salario = novoSalarioN;
        }
        const novoDesconto = prompt("Digite o novo desconto: ");
        const novoDescontoN = parseFloat(novoDesconto);
        funcionarioEmQuestao.desconto = novoDescontoN

        console.log("Remuneração alterada!");
    }

    toString() {
        return `${this.#cracha}, ${this.#nome}, ${this.#vinculo}, ${this.salarioFuncionario()}.`; 
    }

    get cracha() {
        return this.#cracha;
    }

    get vinculo() {
        return this.#vinculo;
    }

    set valorPorHora(novoValorPorHoraN) {
        if(novoValorPorHoraN <= 0) {
            throw new Error("Formato inválido!")
        }
        this.#valorPorHora = novoValorPorHoraN;
    }

    set totalDeHoras(novoTotalDeHorasN) {
        if(novoTotalDeHorasN <= 0) {
            throw new Error("Formato inválido!")
        }
        this.#totalDeHoras = novoTotalDeHorasN;
    }

    set salario(novoSalarioN) {
        if(novoSalarioN <= 0) {
            throw new Error("Formato inválido!")
        }
        this.#salario = novoSalarioN;
    }

    set desconto(novoDescontoN) {
        if(novoDescontoN < 0) {
            throw new Error("Formato inválido!")
        }
        this.#desconto = novoDescontoN;
    }
}