let isOpen = false;

const currentUser = JSON.parse(localStorage.getItem('currentUser'));

if (currentUser) {
    const nav = document.getElementById('nav');
    console.log(nav.innerHTML);
    nav.innerHTML = `<a class="nav__link nav__link_active" href="#">Главная</a>
    <a class="nav__link" href="#">Товары</a> <a class = "nav__link nav__link_active" href="#">Моя корзина</a>
    <a class = "nav__link" href="#">Выйти</a>`;
} else {
    const nav = document.getElementById('nav');
    nav.innerHTML = `<a class="nav__link nav__link_active" href="#">Главная</a>
    <a class="nav__link" href="#">Товары</a> <a class="nav__link nav__link_bordered" href="/sign-up.html" id="signUp">Регистрация</a>
    <a class="nav__link nav__link_bordered" href="/login.html">Войти</a>`;
}


function onMenuClick() {
    const headerElement = document.getElementById('header');

    if (isOpen) {
        headerElement.className = 'header header-mobile--opened';
        // headerElement.className = `${headerElement.className} header-mobile--opened`;
    } else {
        // headerElement.className = headerElement.className.split('header-mobile--opened').join('');
        headerElement.className = 'header';
    }

    isOpen = !isOpen;
}


