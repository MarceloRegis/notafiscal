
function gerarRecibo(){

    // CLIENTE
    document.getElementById("tomador-mostrar").innerHTML = document.getElementById("tomador").value;
    document.getElementById("cpf-mostrar").innerHTML = document.getElementById("cpf").value;
    document.getElementById("celular-mostrar").innerHTML = document.getElementById("celular").value;

    // DISCRIMINACAO DO SERVICO 
    document.getElementById("local-mostrar").innerHTML = document.getElementById("local").value;
    document.getElementById("destino-mostrar").innerHTML = document.getElementById("destino").value;
    document.getElementById("valor-mostrar").innerHTML = document.getElementById("valor").value;

    document.getElementById("recibo_data").innerHTML = dataAtual();

    window.print();

}

function dataAtual(){
    let data = new Date();
    return data.getDate() + "/" + data.getMonth() + "/" + data.getFullYear();
}