const burger = document.querySelector('.menu-burger > img');
const burgerMenu = document.querySelector('.menu-burger > ul');

burger.addEventListener('click', () => {
    // Si le menu a un style "display" en block, on le cache
    if (burgerMenu.style.display === 'flex') {
        burgerMenu.style.display = 'none';
    } else {
        // Sinon, on affiche le menu
        burgerMenu.style.display = 'flex';
    }
});
