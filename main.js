const buttonDraw = document.getElementById('draw'),
    betweenNumbers = document.getElementById('between-numbers'),
    andNumbers = document.getElementById('and-numbers'),
    result = document.getElementById('result');

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const buttonActiv = () => {
    const min = parseInt(betweenNumbers.value),
        max = parseInt(andNumbers.value);

    if (isNaN(min) || isNaN(max) || min >= max) {
        result.textContent = 'Por favor, insira números válidos (mínimo < máximo)';
        console.log(`Por favor, insira números válidos (mínimo < máximo)`)
    }

    else {
        const randomNumber = getRandomNumber(min, max);
        result.textContent = `Número sorteado: ${randomNumber}`;
        console.log(`Número sorteado: ${randomNumber}`)
    }
}

buttonDraw.addEventListener('click', buttonActiv);