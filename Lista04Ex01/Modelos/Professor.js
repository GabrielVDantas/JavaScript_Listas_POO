import PromptSync from 'prompt-sync';
import Funcionario from './Funcionario.js';
import VerificaExistencia from './VerificaExistencia.js';
const prompt = PromptSync();

export default class Professor extends Funcionario {
    #urlCurriculoLattes;
    #disciplinas;
    constructor(cpf, nome, numeroCracha, salario, urlCurriculoLattes, disciplinas) {
        super(cpf, nome, numeroCracha, salario);
        this.#urlCurriculoLattes = urlCurriculoLattes;
        this.#disciplinas = [];
    }

    static adicionaDisciplina(pessoas, disciplinasCriadas) {
        const professor = VerificaExistencia.verPessoaExiste(pessoas);
        const disciplina = VerificaExistencia.verDisciplinaExiste(disciplinasCriadas);
        professor.#disciplinas.push(disciplina);
        console.log("Disciplina adicionada ao professor com sucesso!");
    }

    toString() {
        return `${super.toString()}, Url do currículo Lattes: ${this.#urlCurriculoLattes}.`
    }
}