const button = document.querySelector('div.dark__mode')
const ball = button.querySelector('span')

ball.onclick = () => {
    ball.classList.toggle('dark')

    if(button.classList == 'dark__mode dark'){
        button.backgroundColor = 'white'
    }
}
