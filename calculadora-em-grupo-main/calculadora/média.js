function somar(){
    var dado1 = document.getElementById('dado1').value;
    var dado2 = document.getElementById('dado2').value;
    var dado3 = document.getElementById('dado3').value;
    var dado4 = document.getElementById('dado4').value;
    var result = parseInt(parseInt(dado1) + parseInt(dado2) + parseInt(dado3) + parseInt(dado4)) / 4;
    alert(result);
}
function limpar(){
    document.getElementById('dado1').value=("");
    document.getElementById('dado2').value=("");
    document.getElementById('dado3').value=("");
    document.getElementById('dado4').value=("");
}