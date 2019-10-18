const displayNav = () => {
    const burger = document.querySelector('#menu-bars');
    const nav = document.querySelector('.nav-items');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

displayNav();