let itemShowed = document.getElementById("text0")
let boxSelected = document.querySelector(".skill-conteiner")
console.log(boxSelected)


const skill1 = document.querySelector(".skill1")
skill1.addEventListener("mouseenter", function(evento) {
    ocultar(1)
})

const skill2 = document.querySelector(".skill2")
skill2.addEventListener("mouseenter", function(evento) {
    ocultar(2)
})

const skill3 = document.querySelector(".skill3")
skill3.addEventListener("mouseenter", function(evento) {
    ocultar(3)
})

const skill4 = document.querySelector(".skill4")
skill4.addEventListener("mouseenter", function(evento) {
    ocultar(4)
})

function ocultar(number) {
    itemShowed.style.display="none"; //esconde o texto principal
    document.getElementById(`text${number}`).style.display="list-item"; //mostra o texto do bloco que passou em cima
    itemShowed = document.getElementById(`text${number}`)
} 

boxSelected.addEventListener("mouseleave", function(evento){
    itemShowed.style.display="none"; //esconde o texto principal
    itemShowed = document.getElementById("text0")
    document.getElementById("text0").style.display="list-item"; //mostra o texto do bloco que passou em cima
})


