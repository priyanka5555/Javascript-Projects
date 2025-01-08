const input_name = document.getElementById('name1')
const output = document.getElementById('output')

function getValue() {
    let original_number = parseInt(input_name.value)
    let  number = original_number
    let  reversed_number = 0
    let rem = 0

    while (original_number > 0) {
        rem = original_number % 10
        reversed_number = reversed_number * 10 + rem
        original_number = Math.floor(original_number/10)
    }

    if(number == reversed_number){
        output.innerHTML =  reversed_number + " is a palindrome"
    }
    else{
        output.innerHTML =  reversed_number + " is not a palindrome"
    }

    

}