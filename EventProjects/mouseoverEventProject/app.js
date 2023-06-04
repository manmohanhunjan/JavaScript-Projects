let image  = document.querySelector('.image');

image.addEventListener('mouseover', () => {
    image.src = 'https://images.unsplash.com/photo-1471400974796-1c823d00a96f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80';
});

image.addEventListener('mouseout', () => {
    image.src = 'https://images.unsplash.com/photo-1684095756689-e054ddb31801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80';
});