const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach( (button) => {
    button.addEventListener( 'click', (e) => {
        
        const color = button.className;
        console.log(color);

        if(color.includes('green')){
            body.style.background = ('green');
        }
        else if(color.includes('blue')){
            body.style.background = ('blue');
        }
        else if(color.includes('grey')){
            body.style.background = ('grey');
        }
        else if(color.includes('red')){
            body.style.background = ('red');
        }

    })
})