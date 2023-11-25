
function onLogin() {
    const loginForm = document.getElementById('login-form');
    const user = {};

    const inputs = loginForm.getElementsByTagName('input');

    for (let i = 0; i < inputs.length; i++) {
        user[inputs[i].name] = inputs[i].value;
    }


    localStorage.setItem('currentUser', JSON.stringify(user));
    window.location.href = 'http://127.0.0.1:5500/';
}





