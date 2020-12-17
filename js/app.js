const toggleBar = document.querySelector('.toggle-bar');
const menuBar= document.querySelector('.menu-bar');

toggleBar.addEventListener('click', () => {
    if(menuBar.classList.contains('menu-bar-on')) {
        menuBar.classList.remove('menu-bar-on');
        toggleBar.classList.remove('toggle-bar-on');
    } else {
        menuBar.classList.add('menu-bar-on');
        toggleBar.classList.add('toggle-bar-on');
    }
});