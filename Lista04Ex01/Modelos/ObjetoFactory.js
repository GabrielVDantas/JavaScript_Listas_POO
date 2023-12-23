import PromptSync from 'prompt-sync';
import Aluno from './Aluno.js';
import Atendente from './Atendente.js';
import Disciplina from './Disciplina.js';
import Professor from './Professor.js';


const prompt = PromptSync();

export default class ObjetoFactory {
    static pedeInfoPessoa() {
        const cpfDigitado = prompt("Digite o CPF: ");
        const nomeDigitado = prompt("Digite o nome: ");
        return {cpf: cpfDigitado, nome: nomeDigitado};
    }

    static pedeInfoAluno() {
        let infoPessoa = this.pedeInfoPessoa();
        const raDigitado = prompt("Digite o RA: ");
        const cursoDigitado = prompt("Digite o curso: ");
        console.log("Aluno adicionado com sucesso!");
        return new Aluno(infoPessoa.cpf, infoPessoa.nome, raDigitado, cursoDigitado);
    }

    static pedeInfoAtendente() {
        let infoFuncionario = this.pedeInfoFuncionario();
        const setorDigitado = prompt("Digite o setor: ");
        const funcaoDigitado = prompt("Digite a função: ");
        console.log("Atendente adicionado com sucesso!");
        return new Atendente(infoFuncionario.cpf, infoFuncionario.nome,
             infoFuncionario.numeroCracha, infoFuncionario.salario, setorDigitado, funcaoDigitado);
    }

    static pedeInfoDisciplina() {
        let codigoDigitado = prompt("Digite o código: ");
        codigoDigitado = parseInt(codigoDigitado);
        const nomeDigitado = prompt("Digite o nome: ");
        console.log("Disciplina adicionada com sucesso!");
        return new Disciplina(codigoDigitado, nomeDigitado);
    }

    static pedeInfoFuncionario() {
        let infoPessoa = this.pedeInfoPessoa();
        let numeroCrachaDigitado = prompt("Digite o número do crachá: ");
        numeroCrachaDigitado = parseInt(numeroCrachaDigitado);
        let salarioDigitado = prompt("Digite o salário: ");
        salarioDigitado = parseFloat(salarioDigitado);
        return {cpf: infoPessoa.cpf, nome: infoPessoa.nome, 
            numeroCracha: numeroCrachaDigitado, salarioDigitado: salarioDigitado};
    }

    static pedeInfoProfessor() {
        let infoFuncionario = this.pedeInfoFuncionario();
        const urlCurriculoLattesDigitado = prompt("Digite a url do currículo Lattes: ");
        console.log("Professor adicionado com sucesso!");
        return new Professor(infoFuncionario.cpf, infoFuncionario.nome, 
            infoFuncionario.numeroCracha, infoFuncionario.salario, urlCurriculoLattesDigitado);
    }

    static adicionaObjetos(objeto) {
        switch (objeto) {
            case 1:
                const novaDisciplina = this.pedeInfoDisciplina();
                return novaDisciplina;
            case 2:
                const novoProfessor = this.pedeInfoProfessor();
                return novoProfessor;
            case 3:
                const novoAtendente = this.pedeInfoAtendente();
                return novoAtendente;
            case 4:
                const novoAluno = this.pedeInfoAluno();
                return novoAluno;
        }
    }
}

