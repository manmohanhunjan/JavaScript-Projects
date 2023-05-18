const contextMenu = document.querySelector('#contextMenu');
const container = document.querySelector('#container');
container.addEventListener('contextmenu', (event)=>{

    event.preventDefault();
    contextMenu.style.display = 'block';
    contextMenu.style.left = `${event.clientX}px`;
    contextMenu.style.top = `${event.clientY}px`;
    contextMenu.classList.add('active');

    
    
});
contextMenu.addEventListener('click', (event)=>{
    let clickedItem = event.target;
if (clickedItem.tagName === 'LI' && clickedItem.value === 'Alert') {
   alert('Alert');
}});