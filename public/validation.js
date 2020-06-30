const name = document.querySelector('form input[name="name"')
const email = document.querySelector('form input[name="email"')
const blood = document.querySelector('form select')
const button = document.querySelector('form button')
const form = document.querySelector('form')

form.onsubmit = (event) => {
    event.preventDefault()

    if(name.value == '') return alert('Campo vazio')
    if(email.value == '') return alert('Campo vazio')
    if(blood.value == '') return alert('Campo vazio')
    if(blood.value == 'opc') return alert('Campo inválido')

    return form.submit()
}