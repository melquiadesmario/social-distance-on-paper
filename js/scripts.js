const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

let diameterActionField = 0

function actionField(){
    const action = document.getElementById('action-field')
    diameterActionField = parseInt(action.value)
}

function createPerson(x, y, action){
    const diameterPerson = 5

    context.fillStyle = 'rgba(0, 0, 0, 0.1)'
    context.strokeStyle = '#9c27b0'
    context.beginPath()
    context.arc(x, y, diameterActionField, 0, 2 * Math.PI)
    if(action){
        context.stroke()
        context.fill()
    }

    context.fillStyle = '#9c27b0'
    context.beginPath()
    context.arc(x, y, diameterPerson, 0, 2 * Math.PI)
    context.fill()
}

const positionX = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
const positionY = [50, 150, 250, 350, 450, 550]

function clearScreen(){
    context.fillStyle = '#FFF'
    context.beginPath()
    context.rect(0, 0, 1000, 500)
    context.closePath()
    context.fill()

    for(let x = 0; x <= positionX.length - 1; x++){
        for(let y = 0; y <= positionY.length - 1; y++){
            createPerson(positionX[x], positionY[y], false)
        }
    }
}

function draw(){
    for(let x = 0; x <= positionX.length - 1; x++){
        for(let y = 0; y <= positionY.length - 1; y++){
            createPerson(positionX[x], positionY[y], true)
        }
    }
}

canvas.addEventListener('mousedown', onDown, false)

function onDown(event){
    cx = event.pageX - 182
    cy = event.pageY - 82
    
    createPerson(cx, cy, true)
}