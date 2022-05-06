const login = {
    email: document.querySelectorAll("[data-login='email']")[0],
    password: document.querySelectorAll("[data-login='password']")[0],
    toggle: document.querySelectorAll("[data-login='toggle']")[0],
}

const regex = {
    email: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
};

const test = () => { console.log(regex.email.test(email.value)); };

const toggle = () => {
    if (login.password.type === 'password') {
        login.password.type = 'text';
        login.toggle.innerHTML = 'visibility_off';
    } else {
        login.password.type = 'password';
        login.toggle.innerHTML = 'visibility';
    }
};

login.email.addEventListener('keyup', test);

login.toggle.addEventListener("click", toggle);