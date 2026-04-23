import CWS from "./CWS.js";

let canvas = document.getElementById("canvas")
canvas.width = 1000;
canvas.height = 1000;
let sprite = CWS.createSprite(CWS.spriteGallery.racingCar, 5, 0, 0)

function gameLoop(){
    CWS.clear(canvas)
    CWS.drawSprite(sprite, canvas)
    CWS.moveSprite(sprite, 1, 0.5)
    requestAnimationFrame(gameLoop)
}

gameLoop()