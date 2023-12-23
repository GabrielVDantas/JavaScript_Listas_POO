import PromptSync from 'prompt-sync';
const prompt = PromptSync();

export default class VerificaExistencia {
    static verificaCursoExiste(cursos) {
        let codigoCursoProcurado = prompt("Digite o código do curso: ");
        codigoCursoProcurado = parseInt(codigoCursoProcurado);
        let cursoProcurado = cursos.find(curso => curso.codigo === codigoCursoProcurado);
        if (cursoProcurado) {
            return cursoProcurado;
        } else {
            console.log("Não foi encontrado nenhum curso com o código digitado!");
            return null;
        }
    }
    
    static verificaAlunoExiste(cursoProcurado) {
        if (cursoProcurado) {
            let raAlunoProcurado = prompt("Digite o ra do aluno a ser removido: ");
            raAlunoProcurado = parseInt(raAlunoProcurado);
            let alunoProcurado = cursoProcurado.alunos.find(aluno => aluno.ra === raAlunoProcurado);
            if (alunoProcurado) {
                return alunoProcurado;
            } else {
                console.log("Não foi encontrado nenhum aluno no curso em questão com o RA digitado!");
                return null;
            }
        }
    }
}