let email = document.querySelectorAll("[data-login='email']")[0];
        let result = document.getElementById('result');

        const regex = {
            email: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        };

        function test() {
            console.log(regex.email.test(email.value));
        };

        email.addEventListener('keyup', test);

        const togglePassword = document.getElementById('togglePassword');

        const showOrHidePassword = () => {
            const password = document.getElementById('password');
            if (password.type === 'password') {
                password.type = 'text';
                togglePassword.innerHTML = 'visibility_off';
            } else {
                password.type = 'password';
                togglePassword.innerHTML = 'visibility';
            }
        };

        togglePassword.addEventListener("click", showOrHidePassword);