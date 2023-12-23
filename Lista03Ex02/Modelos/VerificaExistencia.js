import PromptSync from 'prompt-sync';
const prompt = PromptSync();

export default class VerificaExistencia {
    static verificaPessoaExiste(pessoas) {
        let codigoEspecifico = prompt("Digite o código da pessoa: ");
        codigoEspecifico = parseInt(codigoEspecifico);
        let pessoaProcurada = pessoas.find(pessoa => pessoa.codigo === codigoEspecifico);
        if (pessoaProcurada === undefined) {
            console.log("Pessoa não encontrada!");
        } else {
            return pessoaProcurada;
        }
    }
}