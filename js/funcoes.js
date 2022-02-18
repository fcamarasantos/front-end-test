function validarProduto(idNomeProduto, idCodProduto, idDetalProduto, idQtidadeProduto, idProcProduto) {
    let nome = document.getElementById(idNomeProduto).value;
    let codigo = document.getElementById(idCodProduto).value;
    let det = document.getElementById(idDetalProduto).value;
    let qtidade = document.getElementById(idQtidadeProduto).value;
    let proc = document.getElementById(idProcProduto).value;

    if (nome == "")
        alert("Nome do produto não pode estar em branco. Favor preenchê-lo!");
    else if (codigo == "")
        alert("Código do produto não pode estar em branco. Favor preenchê-lo!");
    else cadastrarProduto(nome, codigo, det, parseInt(qtidade), proc);
}

function cadastrarProduto(produto, codig, detalhe, qtidade, proce) {
    let novoProduto = {nome:produto, codigo:codig, detalhes:detalhe, quantidade:qtidade, procede:proce};

    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        if (produtos == null) produtos = [];
        else produtos = JSON.parse(produtos);
        produtos.push(novoProduto);
        localStorage.setItem("produtos",JSON.stringify(produtos))
        alert("Seu cadastro foi feito com sucesso, em breve entraremos em contato com você. Obrigado!");
        atualizarTotalEstoque("totalEstoque");
        location.reload();
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}

function atualizarTotalEstoque(idCampo) {
    localStorage.setItem("totalEstoque",++document.getElementById(idCampo).innerHTML)
}

function carregarTotalEstoque(idCampo) {
    if (typeof(Storage) !== "undefined") {
        let totalEstoque = localStorage.getItem("totalEstoque");
        if (totalEstoque == null) totalEstoque = 0;
        document.getElementById(idCampo).innerHTML = totalEstoque;
    }
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}

function listarEstoque() {
    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        document.write("<h1>Cadastro dos Clientes:</h1>")
        if (produtos == null)
            document.write("<h3>Ainda não há nenhum item no estoque</h3>");
        else {
            produtos = JSON.parse(produtos);
            produtos.forEach(produto => {
                document.write("<ul>");
                document.write("<li>Nome da pessoa: "+produto.nome+"</li>");
                document.write("<li>Email da pessoa: "+produto.codigo+"</li>");
                document.write("<li>Número da pessoa: "+produto.detalhes+"</li>");
                document.write("<li>Destino escolhido: "+produto.quantidade+"</li>");
                document.write("<li>Pessoas que vão viajar: "+produto.procede+"</li>");
                document.write("</ul>");
            });
        }
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");    
}