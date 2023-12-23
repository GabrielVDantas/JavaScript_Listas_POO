import PromptSync from 'prompt-sync';
const prompt = PromptSync();

export default class Aluno {
    #ra;
    #nome;
    #ac1;
    #ac2;
    #ag;
    #af;
    constructor(ra, nome, ac1, ac2, ag, af) {
        this.#ra = ra;
        this.#nome = nome;
        this.#ac1 = ac1;
        this.#ac2 = ac2;
        this.#ag = ag;
        this.#af = af;
    }

    static pedeInfo() {
        const alunoRa = prompt("Digite o ra: ");
        const alunoNome = prompt("Digite o nome: ");
        const alunoAc1 = prompt("Digite o AC1: ");
        const alunoAc2 = prompt("Digite o AC2: ");
        const alunoAg = prompt("Digite o AG: ");
        const alunoAf = prompt("Digite o AF: ");
        return new Aluno(alunoRa, alunoNome, alunoAc1, alunoAc2, alunoAg, alunoAf);
    }

    mediaDoAluno() {
        return (this.#ac1 * 0.15) + (this.#ac2 * 0.30) + (this.#ag * 0.10) + (this.#af * 0.45);
    }

    aprovacaoDoAluno() {
        if (this.mediaDoAluno() >= 5.0) {
            return "Aprovado!";
        } else {
            return "Reprovado!";
        }
    }

    toString() {
        return `${this.#ra}, ${this.#nome}, ${this.aprovacaoDoAluno()}.`; 
    }
}