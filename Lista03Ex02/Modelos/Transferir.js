import PromptSync from 'prompt-sync';
import VerificaExistencia from './VerificaExistencia.js';
const prompt = PromptSync();

export default class Transferir {
    static transfereAutomovel(pessoas) {
        console.log("Antigo dono: ");
        const antigoDono = VerificaExistencia.verificaPessoaExiste(pessoas);
        console.log("Novo dono: ");
        const novoDono = VerificaExistencia.verificaPessoaExiste(pessoas);
        if (antigoDono.codigo === novoDono.codigo) {
            console.log("Transferência inválida: um carro já pertencente à pessoa não pode ser transferido para ela mesma.");
        } else {
            Transferir.transferir(antigoDono, novoDono);
        }
    }
    
    static transferir(antigoDono, novoDono) {
        console.log("Antigo dono: " + antigoDono.toString());
        console.log("Respectivos automóveis: " + antigoDono.automoveis.toString());
        console.log("Novo dono: " + novoDono.toString());
        console.log("Respectivos automóveis: " + novoDono.automoveis.toString());
        let indexAutomovel = prompt("Digite o index do carro para ser transferido: ");
        indexAutomovel = parseInt(indexAutomovel);
        if(indexAutomovel >= 0 && indexAutomovel < antigoDono.automoveis.length) {
            let automovelTransferir = antigoDono.automoveis[indexAutomovel];
            antigoDono.automoveis.splice(automovelTransferir);
            novoDono.automoveis.push(indexAutomovel, 1);
            console.log("Automóvel transferido com sucesso!");
        } else {
            console.log("Não há nenhum automóvel com o índice digitado!");
        }
    }
}