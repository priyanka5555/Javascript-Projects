function createButton() {
    let createBtn = document.getElementById("createBtn")
    let buttonContainer = document.getElementById("buttonContainer")


    let newBtn = document.createElement("button")
    newBtn.innerHTML = colorOption.options[colorOption.selectedIndex].text;
    newBtn.setAttribute('id', 'colorBtn')
    buttonContainer.appendChild(newBtn)

    newBtn.onclick = function colorBtn() {

        if (newBtn.innerHTML == "Black"){
            document.getElementById("chooseColor").style.color = 'white';
        }
        document.body.style.backgroundColor = newBtn.innerHTML


    }



}

