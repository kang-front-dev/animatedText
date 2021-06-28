var input = document.querySelector('.wrapper_input'),
    btn = document.querySelector('#add'),
    output = document.querySelector('.wrapper_text'),
    deleteBtn = document.querySelector('#delete')





btn.addEventListener('click', function(){
    let userText = input.value
    console.log(userText);

    let wordArray = userText.split("")
    console.log(wordArray);

    output.textContent = ''
    typing(wordArray)

    btn.style.display = "none"
    deleteBtn.style.display = "flex"
})

deleteBtn.addEventListener('click', function(){
    deleteText()
    deleteBtn.style.display = "none"
    btn.style.display = "flex"
})

let letterArray = [],
letterCount = 0

function typing(wordArray){

        let letter = wordArray[letterCount]

        let newLetter = document.createElement("h3")
        output.appendChild(newLetter)
        newLetter.className = 'animated-letter'
        newLetter.textContent = letter

        letterCount++;
        if(wordArray.length != letterCount){
            setTimeout(() => {
                typing(wordArray)
            }, 60);
        }

    }


function deleteText(){
    output.style.opacity = "0"
    setTimeout(() => {
        let deletingLetter = document.querySelectorAll('.animated-letter')
        for (let i = 0; i < deletingLetter.length; i++) {
            deletingLetter[i].remove()
        }
        letterCount = 0
        output.style.opacity = "1"
    }, 300);
        

}




