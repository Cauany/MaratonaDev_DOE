const form = document.querySelector('section form')

form.addEventListener('submit', validation)

function validation(e){
    e.preventDefault()
    
    const name = form.querySelector('input[name="name"]')
    const email = form.querySelector('input[name="email"]')
    const blood = form.querySelector('select')

    const posOption = blood.options.selectedIndex

    function validaCampo(){
        if(name.value == ''){
            form.querySelector('span#one')
                .innerHTML = '* Campo inválido'
            name.style.border = '2px solid red'
            email.classList.add('space')
        }else{
            form.querySelector('span#one')
                .innerHTML = ''
            name.style.border = '1px solid #ffffff88'
            email.classList.remove('space')
        }
    
        if(email.value == ''){
            form.querySelector('span#two')
                .innerHTML = '* Campo inválido'
            email.style.border = '2px solid red'
            blood.classList.add('space')
        }else{
            form.querySelector('span#two')
                .innerHTML = ''
            email.style.border = '1px solid #ffffff88'
            blood.classList.remove('space')
        }
    
        if(posOption == 0){
            form.querySelector('span#three')
                .innerHTML = '* Campo inválido'
            blood.style.border = '2px solid red'
            form.querySelector('button')
                .classList.add('space')
        }else{
            form.querySelector('span#three')
                .innerHTML = ''
            blood.style.border = '1px solid #ffffff88'
            form.querySelector('button')
                .classList.remove('space')
        }
    }

    validaCampo()

    if(!(name.value == '' && email.value == '')){
        if(posOption == 0) return alert(' Campo tipo sanguíneo inválido')
        form.submit()
    } 
}
