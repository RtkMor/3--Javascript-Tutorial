const form = document.querySelector('form');

form.addEventListener('submit', function(e){

    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    let result = 0;
    const element = document.querySelector('#results');

    if(height === '' || weight === '' || isNaN(height) || isNaN(weight)){
        element.innerHTML = 'Please provide valid inputs';
    }
    else{
        result = (weight / (height * height / 10000)).toFixed(2);

        element.innerHTML = `${result}, `;

        if(result<18.6){
            element.innerHTML += `Under-Weight`
        }
        else if(result>24.9){
            element.innerHTML += `Over-Weight`
        }
        else{
            element.innerHTML += `Normal-Weight`
        }

    }

})