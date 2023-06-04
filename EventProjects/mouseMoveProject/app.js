const field = document.querySelector('.container')
const ball = document.querySelector('.ball')

field.addEventListener('mousedown', (event) => {
    // event.preventDefault()
    ball.style.position = 'absolute';

    ball.style.left = event.clientX + 'px';

    ball.style.top = event.clientY + 'px';

    // field.addEventListener('mousemove', onMouseMove);

})

// field.addEventListener('mouseup', () => {
//     field.removeEventListener('mousemove', onMouseMove);
// }
// )

// function onMouseMove(event) {
//     ball.style.left = event.clientX + 'px';
//     ball.style.top = event.clientY + 'px';
// }

