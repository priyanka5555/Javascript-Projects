const body = document.getElementsByTagName("body")[0]

function setColor(color_name){
    body.style.backgroundColor = color_name
}

function randomColor(){
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blueviolet = Math.round(Math.random() * 255)

    const color = `rgb(${red},${green},${blueviolet})`
    body.style.backgroundColor = color
}


