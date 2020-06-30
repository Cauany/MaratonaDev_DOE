// const name = document.querySelector('form input[name="name"')
// const email = document.querySelector('form input[name="email"')
// const blood = document.querySelector('form select')
// const button = document.querySelector('form button')
const form = document.querySelector('form')
const inputs = form.querySelectorAll('input').value

for(input in inputs){
    console.log(input)
    input.addEventListener('blur', onblurInput)
    input.addEventListener('focus', onFocusInput)
}

function onblurInput(){
    
    if(input.value == ''){
        input.style.backgroundColor = 'red'
        input.value = 'Campo inválido'
        email.style.marginTop = '5px'
    }else{
        input.style.backgroundColor = 'transparent'
        form.querySelector('span').innerText = ''
        email.style.marginTop = ''
    }
}

function onFocusInput(){
    
    if(!(input.value == '')){
        input.style.backgroundColor = ''
    }
}
