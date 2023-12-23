import PromptSync from 'prompt-sync';
import AlunoPosGraduacao from './AlunoPosGraduacao.js';
import AlunoGraduacao from './AlunoGraduacao.js';
const prompt = PromptSync();

export default class AlunoFactory {
    static pedeInfoAluno() {
        const nomeDigitado = prompt("Digite o nome: ");
        const raDigitado = prompt("Digite o RA: ");
        const cursoDigitado = prompt("Digite o curso: ");
        return {nome: nomeDigitado, ra: raDigitado, curso: cursoDigitado};
    }

    static criaAluno() {
        let infoAluno = this.pedeInfoAluno();
        let situacao = prompt("É um aluno da graduação(1) ou pós graguação(2)? ");
        situacao = parseInt(situacao); 
        if (situacao === 1) {
            const graduacaoDigitada = prompt("Digite o ano de conclusão da graduação: ");
            console.log("Aluno adicionado com sucesso!");
            return new AlunoGraduacao(infoAluno.nome, infoAluno.ra, infoAluno.curso, graduacaoDigitada);
        } else if (situacao === 2) {
            const posGraduacaoDigitada = prompt("Digite o ano de conclusão da pós graduação: ");
            console.log("Aluno adicionado com sucesso!");
            return new AlunoPosGraduacao(infoAluno.nome, infoAluno.ra, infoAluno.curso, posGraduacaoDigitada);
        } else {
            console.log("Foi digitada uma opção inválida!");
            return null;
        }
    }


}
