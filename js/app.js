const searchField = document.querySelector('input');
const thumbnail = document.querySelectorAll('.thumbnail');

searchField.addEventListener('keyup', (e) =>{
    const userInput = e.target.value.toLowerCase();

    for (let i = 0; i < thumbnail.length; i++){
        let caption = thumbnail[i].getAttribute('data-caption').toLowerCase();

        if (caption.includes(userInput)) {
            thumbnail[i].style.display = '';
        } else {
            thumbnail[i].style.display = 'none';
        }
    }
});

window.addEventListener('load', function() {
    baguetteBox.run('.gallery', {
        animation: 'fadeIn'
    });
});