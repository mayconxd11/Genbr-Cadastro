function cadastro() {
    console.log(' << Você é pessoa Física ou juridica ?  >>: ');
    console.log(' << 1 - Pessoa Física >>: ');
    var tipoUsuario = prompt(' << 2 - juridica >>: ');
    console.log();
    console.log(' $$$$$ SE CADASTRE AQUI!!! $$$$$ ');
    var nomeText = prompt(' <<  - Digite seu nome aqui>>: ');
    console.log();
    var idadeText = prompt(' <<  - Digite sua data de nascimento>>: ');
    console.log();
    var emailText = prompt(' <<  - Digite seu Email:>>: ');
    console.log();
    switch (tipoUsuario) {
        case '1':
            var cpfText = prompt('Digite seu CPF');
            break;
        case '2':
            var cnpjText_1 = prompt('Digite seu CNPJ');
            break;
        default:
            break;
    }
    console.log();
    var celularText = prompt(' << 5 - Digite seu número>>: ');
    console.log();
    var senhaText = prompt(' << 6 Digite a sua senha>>: ');
    console.log();
    var cnpjText = prompt(' << 7 Digite seu CNPJ >>: ');
    console.log();
    console.log('|$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$|');
    console.log("|$$$$$ MUITO OBRIGADO SR(A):".concat(nomeText, "$$$$$$|"));
    console.log('|$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$|');
    console.log();
    console.log('|$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$|');
    console.log('|$$ OBRIGADO POR SER CADASTRAR NA GENBANK! $$|');
    console.log('|$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$|');
    console.log();
    console.log('|$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$|');
    console.log('|$$$$$$$ CONTINUE PARA A TELA DE LOGIN $$$$$$$|');
    console.log('|$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$|');
}
module.exports = cadastro;
