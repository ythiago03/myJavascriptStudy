const btn = document.querySelector('.btn');
const div = document.querySelector('.janela');

btn.addEventListener('click', () => {
    div.classList.remove('invisible')
    btn.classList.add('invisible')
})

document.addEventListener('keydown', (event) => {
    console.log(event);
    const isEscKey = event.key === 'Escape'
    if(isEscKey){
        div.classList.add('invisible')
        btn.classList.remove('invisible')
    };
})