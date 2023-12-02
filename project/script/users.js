const mockUsers = [
  {
    name: 'Assyl',
    surname: 'Suleiman',
    username: 'assyl_suleiman',
    password: 'test_1234',
  },
  {
    name: 'Second',
    surname: 'User',
    username: 'second_user',
    password: 'test_1234',
  },
  {
    name: 'Third',
    surname: 'User',
    username: 'third_user',
    password: 'test_1234',
  },
  {
    name: 'Fourth',
    surname: 'User',
    username: 'fourth_user',
    password: 'test_1234',
  },
];

if (!localStorage.getItem('users')) {
  localStorage.setItem('users', JSON.stringify(mockUsers));
}

const users = JSON.parse(localStorage.getItem('users'));

function onLogin() {
  const loginForm = document.getElementById('login-form');
  const user = {};

  const inputs = loginForm.getElementsByTagName('input');

  for (let i = 0; i < inputs.length; i++) {
    user[inputs[i].name] = inputs[i].value;
  }

  let currentUser = null;

  for (let i = 0; i < users.length; i++) {
    if (user.username === users[i].username && user.password === users[i].password) {
      currentUser = users[i];
      break;
    }
  }

  if (currentUser) {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    window.location.href = 'http://127.0.0.1:5500/';
  } else {
    const p = document.getElementById('error-text');
    p.innerHTML = 'Пользователь не найден';
    p.className = 'validation-text visible';
  }
}

function onRegister() {
  const loginForm = document.getElementById('login-form');
  const user = {};

  const inputs = loginForm.getElementsByTagName('input');

  for (let i = 0; i < inputs.length; i++) {
    user[inputs[i].name] = inputs[i].value;
  }

  let isAlreadExist = false;

  for (let i = 0; i < users.length; i++) {
    if (user.username === users[i].username) {
      isAlreadExist = true;
      break;
    }
  }

  if (!isAlreadExist) {
    const currentUser = {
      name: user.name,
      surname: user.surname,
      username: user.username,
      password: user.password,
    };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    users.push(currentUser);
    localStorage.setItem('users', JSON.stringify(users));
    window.location.href = 'http://127.0.0.1:5500/';
  } else {
    const p = document.getElementById('error-text');
    p.innerHTML = 'Пользователь уже существует';
    p.className = 'validation-text visible';
  }
}
