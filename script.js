//Получаем значения элементов
const form = document.querySelector('form');
const ageInput = document.getElementById('age');
const checkbox = document.getElementById('checkbox');
const ageError = document.getElementById('age-error');
const checkboxError = document.getElementById('agreement-error');


form.addEventListener('submit', function (event) {
    event.preventDefault(); // отменяем стандартное поведение отправки формы

    clearErrors(); // очищаем сообщения об ошибках и классы ошибок

    if (!ageInput.checkValidity()) {
        ageInput.classList.add('error-message');
        ageError.textContent = 'Введите свой возраст';
    }

    if (!checkbox.checked) {
        checkbox.classList.add('error-message');
        checkboxError.textContent = 'Это поле обязательно для заполнения';
    }

    if (form.checkValidity()) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const age = ageInput.value;


        console.log(`Имя: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Возраст: ${age}`);

        form.reset();
    }
});

//Очистка форм

function clearErrors() {
    const errors = form.querySelectorAll('.error-message');
    errors.forEach(error => error.classList.remove('error-message'));
    ageError.textContent = '';
    checkbox.nextElementSibling.textContent = '';
}

ageInput.addEventListener('input', function () {
    if (ageInput.checkValidity()) {
        ageInput.classList.remove('error-message');
        ageError.textContent = '';
    } else {
        ageInput.classList.add('error-message');
        ageError.textContent = 'Введите свой возраст';
    }
});

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        checkbox.classList.remove('error-message');
        checkbox.nextElementSibling.textContent = '';
    } else {
        checkbox.classList.add('error-message');
        checkbox.nextElementSibling.textContent = 'Это поле обязательно для заполнения';
    }
});

//Код для подсказки заполнения пароля
const passwordInput = document.getElementById('password');
const passwordHint = document.querySelector('.password-hint');

passwordInput.addEventListener('input', function () {
    const password = passwordInput.value;

    if (password.length >= 8 && /\d/.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password)) {
        passwordHint.style.color = 'green';
        passwordHint.textContent = 'Правильный пароль!';
    } else {
        passwordHint.style.color = 'red';
        passwordHint.textContent = 'Правильный пароль должен содержать не менее 8 символов, включая заглавные и строчные буквы и цифры.';
    }
});