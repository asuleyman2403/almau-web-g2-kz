let isOpen = false;

const currentUser = JSON.parse(localStorage.getItem('currentUser'));

if (currentUser) {
    const nav = document.getElementById('nav');
    const mobileMenu = document.getElementById('mobile-menu');
    nav.innerHTML = `
    <a class="nav__link" href="/">Главная</a>
    <a class="nav__link" href="/products.html">Товары</a>
    <a class = "nav__link" href="/basket.html">Моя корзина</a>
    <a class = "nav__link" href="javascript:void(0)" onclick="handleLogout()">Выйти</a>
    `;

    mobileMenu.innerHTML = `
        <a href="/" class="header__mobile-menu__item">Главная</a>
        <a href="/products.html" class="header__mobile-menu__item">Товары</a>
        <a href="/basket.html" class="header__mobile-menu__item">Моя корзина</a>
        <a href="javascript:void(0)" class="header__mobile-menu__item" onclick="handleLogout()">Выйти</a>
    `;
} else {
    const nav = document.getElementById('nav');
    const mobileMenu = document.getElementById('mobile-menu');

    nav.innerHTML = `
    <a class="nav__link" href="/">Главная</a>
    <a class="nav__link" href="/products.html">Товары</a>
    <a class="nav__link nav__link_bordered" href="/sign-up.html" id="signUp">Регистрация</a>
    <a class="nav__link nav__link_bordered" href="/login.html">Войти</a>`;

    mobileMenu.innerHTML = `
        <a href="/" class="header__mobile-menu__item">Главная</a>
        <a href="/products.html" class="header__mobile-menu__item">Товары</a>
        <a href="/sign-up.html" class="header__mobile-menu__item">Регистрация</a>
        <a href="/login.html" class="header__mobile-menu__item">Войти</a>
    `;
}

function handleLogout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('basketProducts');
    window.location.reload();
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


