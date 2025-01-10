
const input_number = document.getElementById("name1")
const error_msg = document.getElementById("error_msg")
const output = document.getElementById("output")

function isPalndrome() {
    try {
        let regex = /^[a-zA-Z]+$/;


        let original_value = input_number.value.trim()
        let x = original_value
        let reversed_number = 0
        let reminder = 0


        if (/[a-zA-Z]/.test(original_value) && /\d/.test(original_value) || /[^a-zA-Z0-9]/.test(original_value)) {

            throw new Error("Alphanumberic and special characters are not allowed!");
            // error_msg.innerHTML = "Alphanumberic and special characters are not allowed!"

        }
        if (!original_value.match(regex)) {

            while (x != 0) {

                reminder = x % 10
                reversed_number = reversed_number * 10 + reminder
                x = Math.floor(x / 10)
            }

            if (original_value == reversed_number) {

                output.innerHTML = original_value + " is a Palindrome"
                error_msg.style.display = 'none'
                output.style.display = 'block'
            }
            else {
                output.innerHTML = original_value + " is not a Palindrome"
                error_msg.style.display = 'none'
                output.style.display = 'block'
            }
        }
        else {

            const reversed_word = original_value.split("").reverse().join("");

            if (reversed_word.toLowerCase() == original_value.toLowerCase()) {
                output.innerHTML = original_value + " is a Palindrome"
                error_msg.style.display = 'none'
                output.style.display = 'block'
            }

            else {
                output.innerHTML = original_value + " is not a Palindrome"
                error_msg.style.display = 'none'
                output.style.display = 'block'
            }

        }


    }
    catch (err) {
        // console.error("Error caught:", err);
        error_msg.innerHTML = "Error: " + err.message;
        output.style.display = 'none'
        error_msg.style.display = 'block'
    }

}