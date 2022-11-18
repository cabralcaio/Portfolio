const btn = document.getElementById("botao1")

btn.addEventListener("mouseenter", function (evento) {
    evento.preventDefault()
console.log("clicou")

ocultar()

function ocultar() {
    document.getElementById("text1").style.display="none";
}
})

const skill1 = document.querySelector(".skill1")
skill1.addEventListener("mouseenter", function(evento) {
    ocultar()

function ocultar() {
    document.getElementById("text1").style.display="none";
}
})

