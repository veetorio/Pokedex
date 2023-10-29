
let h4 = document.getElementById("nomePoke")
let img = document.getElementById("sprite")
let type1 = document.getElementsByClassName("types")
let id = document.getElementById("circle")
let spans = document.getElementsByClassName("habilidades")

function mudar() {
    var name = document.getElementById("input_id").value;
    const url = `https://pokeapi.co/api/v2/pokemon/${name}/`
    let promisseNotManipulator = fetch(url).then((response) => response.json())
    .then((promise) => {
        h4.innerHTML = promise.name
      
        console.log(promise)

        switch(promise.types[0].type.name){
            case"grass":
            type1[0].innerHTML = promise.types[0].type.name
            type1[0].style.backgroundColor = "#6FDE59"
            break
            case"fire":
            type1[0].innerHTML = promise.types[0].type.name
            type1[0].style.backgroundColor = "#E1773A"
            break
            case"water":
            type1[0].innerHTML = promise.types[0].type.name
            type1[0].style.backgroundColor = "#5983DE"
            break
            case"flying":
            type1[0].innerHTML = promise.types[0].type.name
            type1[0].style.backgroundColor = "#C7DDDE"
            break
            case"normal":
            type1[0].innerHTML = promise.types[0].type.name
            type1[0].style.backgroundColor = "#DFCAD3"
            break
            case"poison":
            type1[0].innerHTML = promise.types[0].type.name
            type1[0].style.backgroundColor = "#8538E1"
            break
            case"electric":
            type1[0].innerHTML = promise.types[0].type.name
            type1[0].style.backgroundColor = "#DEDB59"
            break
            case"ground":
            type1[0].innerHTML = promise.types[0].type.name
            type1[0].style.backgroundColor = "#DE9C59"
            break
            case"rock":
            type1[0].innerHTML = promise.types[0].type.name
            type1[0].style.backgroundColor = "#702621"
            break
            case"psychic":
            type1[0].innerHTML = promise.types[0].type.name
            type1[0].style.backgroundColor = "#E06BAE"
            break
            case"ice":
            type1[0].innerHTML = promise.types[0].type.name
            type1[0].style.backgroundColor = "#9CFFFF"
            break
            case"bug":
            type1[0].innerHTML = promise.types[0].type.name
            type1[0].style.backgroundColor = "#9C6DFF"
            break
            case"ghost":
            type1[0].innerHTML = promise.types[0].type.name
            type1[0].style.backgroundColor = "#3A1F6D"
            type1[0].style.color = "white"
            break
            case"steel":
            type1[0].innerHTML = promise.types[0].type.name
            type1[0].style.backgroundColor = "#59E2A8"
            break
            case"dragon":
            type1[0].innerHTML = promise.types[0].type.name
            type1[0].style.backgroundColor = "#5E6CE1"
            break
            case"dark":
            type1[0].innerHTML = promise.types[0].type.name
            type1[0].style.backgroundColor = "black"
            type1[0].style.color = "white"
            break
            case"fairy":
            type1[0].innerHTML = promise.types[0].type.name
            type1[0].style.backgroundColor = "#E02B5D"
            break


        }
        img.src = promise['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        id.innerHTML = "#"+promise.id
        spans[0].innerHTML = promise.moves[0].move.name
        spans[1].innerHTML = promise.moves[1].move.name


    })
    
        



}





