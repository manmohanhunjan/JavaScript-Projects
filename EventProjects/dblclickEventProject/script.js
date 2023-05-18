document.addEventListener('DOMContentLoaded', () => {
    //getting the btn element
    const btn = document.querySelector('.button');

    const getRandomColor = () => {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i=0; i<6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    //add the event listener for the dblclick event
    btn.addEventListener('dblclick', () => {
        document.body.style.backgroundColor = getRandomColor();
    });

});