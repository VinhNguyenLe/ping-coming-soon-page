const inputElement = document.querySelector('input')
const btn = document.querySelector('button')
let errorMsg = document.querySelector('.error-msg')
let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

inputElement.onblur = () => {
    if(inputElement.value == '' || !inputElement.value.match(regex)){
        inputElement.classList.add('error-border')
        errorMsg.classList.remove('hide')
    } else {
        inputElement.classList.remove('error-border')
        errorMsg.classList.add('hide')
    }
}

inputElement.onfocus = () => {
    errorMsg.classList.add('hide')
    inputElement.classList.remove('error-border')
}