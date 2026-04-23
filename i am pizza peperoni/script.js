let x = "name"
let name = prompt(x)
let name2 = prompt(`HI ${name}`)
if(name2 === "name"){
    alert(
        "marduk"
    )
} else if(name2 === "barev"){
    alert(`${name} bonjux ${name} mise`)
}


let CWS = {

}
CWS.createSprite([
    [0, 2, 0, 2, 0],
    [2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2],
    [0, 2, 2, 2, 0],
    [0, 0, 2, 0, 0]
], canvas, 20)