let count = 'Click para ter uma resposta';

/**
 * Function called when a click event occurs.
 */
function onClick() {
    console.log('Click Event Occurred');
    count = 'Você clicou e eu respondi';
    var textElement = document.querySelector('#animated-marker a-text');
    textElement.setAttribute('value', count);
}

// Call the onClick function when a click event occurs
document.addEventListener('click', onClick);