var snorlax = {
    nome: "snorlax",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"
}

var bulbasaur = {
    nome: "bulbasaur",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
}

var charmander = {
    nome: "charmander",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
}

var squirtle = {
    nome: "squirtle",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
}

var pidgey = {
    nome: "pidgey",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
}

var rattata = {
    nome: "rattata",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
}

var pikachu = {
    nome: "pikachu",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
}

var zubat = {
    nome: "zubat",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png",
}

var geodude = {
    nome: "geodude",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png",
}

var gastly = {
    nome: "gastly",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png",
}

var acertos = 0
var erros = 0
var pok
var res
var pokAleatorio
var pokemon = [snorlax, bulbasaur, charmander, squirtle, pidgey, rattata, pikachu, zubat, geodude, gastly]
document.getElementById("btnVerificar").disabled = true
atualizaPlacar()

function verificar() {
    pok = (document.getElementById('pok').value).toLowerCase()
    res = document.getElementById('res')
    console.log(pokAleatorio.nome)
    if(pok == pokAleatorio.nome){
        res.innerHTML = 'Acertou'
        acertos++
    } else {
        res.innerHTML = 'Errou'
        erros++
    }
    document.getElementById("btnRenovar").disabled = false
    document.getElementById("btnVerificar").disabled = true
    if(pokemon.length == 0){
        document.getElementById("btnRenovar").disabled = true
        if(acertos > erros){
            res.innerHTML = "Fim de jogo! Você ganhou."
        }else if(acertos < erros){
            res.innerHTML = "Fim de jogo! Você perdeu."
        }else{
            res.innerHTML = "Fim de jogo! O jogo empatou."
        }
    }
    
    atualizaPlacar()
}

function renovar() {
    var  numeroPokAleatorio = parseInt(Math.random() * pokemon.length)
    pokAleatorio = pokemon[numeroPokAleatorio]    
    var img = document.getElementById('img')
    img.innerHTML = `<img src='${pokAleatorio.imagem}'>`
    pokemon.splice(numeroPokAleatorio, 1)
    document.getElementById("btnRenovar").disabled = true
    document.getElementById("btnVerificar").disabled = false
    document.getElementById('pok').value = ""    
    res.innerHTML = ""    
}

function atualizaPlacar() {
    var divPlacar = document.getElementById('placar')
    var html = "Acertos " + acertos + "/" + erros + " Erros"

    divPlacar.innerHTML = html
}