constante avanca = documento.querySelectorAll('.btn-proximo');

avanca.para cada(botão => {
    botão.adicionar ouvinte de eventos('clique', função(){
        constante atual = documento.Seletor de consulta('.ativo');
        constante próximoPasso = 'passo-' + esse.obterAtributo('dados próximos');

        atual.lista de classes.remover('ativo');
        documento.obterElementoPorID(próximoPasso).lista de classes.adicionar('ativo');
    })
})