let count = 'Click para ter uma resposta';

/**
 * Function called when a click event occurs.
 */
function onClick() {
    console.log('Click Event Occurred');
    const randomNumber = Math.random();
    if (randomNumber < 0.25) {
        count = 'Sim';
    } else if (randomNumber < 0.5) {
        count = 'Nao';
    } else if (randomNumber < 0.75) {
        count = 'Talvez';
    } else {
        count = 'Improvavel';
    }
    var textElement = document.querySelector('#animated-marker a-text');
    textElement.setAttribute('value', count);
}

// Call the onClick function when a click event occurs
document.addEventListener('click', onClick);

