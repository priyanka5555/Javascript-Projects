
input_number = document.getElementById("name1")
// output = document.getElementById("output")

function isPalndrome() {
    let regex = /^[a-zA-Z0-9]+$/;


    let original_value = input_number.value
    let x = original_value
    let reversed_number = 0
    let reminder = 0

    if (!original_value.match(regex)) {
        while (x != 0) {

            reminder = x % 10
            reversed_number = reversed_number * 10 + reminder
            x = Math.floor(x / 10)
        }

        if (original_value == reversed_number) {
            output.innerHTML = original_value + " is a Palindrome"
        }
        else {
            output.innerHTML = original_value + " is not a Palindrome"
        }
    }
    else {
        const reversed_word = original_value.split("").reverse().join("");

        if(reversed_word == original_value){
            output.innerHTML = original_value + " is a Palindrome"
        }

        else{
            output.innerHTML = original_value + " is not a Palindrome"
        }
        
    }

    }