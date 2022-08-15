var sim = document.getElementById('sim')
var nao = document.getElementById('nao')
var div = document.getElementById('btn_nao')
function clicou_sim(){
    alert('Nice bro 🤙')
}
function clicou_nao(){
    var a = getRandom()
    alert('Compreensível tenha um bom dia')
}
function getRandom(){
    return Math.random() * 10;
}