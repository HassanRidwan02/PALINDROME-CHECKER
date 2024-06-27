let inputEl = document.getElementById('input-el')
let form = document.getElementById('form')
let btn = document.getElementById('btn')
let main = document.querySelector('main')
let message = document.createElement('p')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let inputValue = inputEl.value
    let inputLowerCase = inputValue.toLowerCase()
    let inputMatch = inputLowerCase.match(/[a-z0-9]/g)
    let inputArrToStr = inputMatch.join('')
    let inputReverse = inputMatch.reverse()
    let inpReverseStr = inputReverse.join('')
    if(inputArrToStr === inpReverseStr){
        message.innerText = `'${inputValue}' is a palindrome`
        main.appendChild(message)
    }else {
        message.innerText = `'${inputValue}' is not a palindrome`
    }
    inputEl.value = ``
})
