const trialForm = document.querySelector('.trial_form');
const formGroups = document.querySelectorAll('.trial_form .form_group');
const firstNameInput = document.getElementById('first_name');
const lastNameInput = document.getElementById('last_name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

const checkEmptyFields = formEls => {
    formEls.forEach(formEl => {
        if (formEl.children[1].value === '') {
            formEl.classList.add('error');
            formEl.children[3].textContent = `${formEl.children[1].placeholder} cannot be empty`;
        }
        if (formEl.children[1].value !== '' && formEl.classList.contains('error')) {
            formEl.classList.remove('error');
            formEl.children[3].textContent = '';
        }
    });
};

const InputFieldValidation = (pattern, input, message) => {
    if (!pattern.test(input.value)) {
        input.parentElement.classList.add('error');
        input.parentElement.children[3].textContent = message;
    } else if (pattern.test(input.value) && input.parentElement.classList.contains('error')) {
        input.parentElement.classList.remove('error');
        input.parentElement.children[3].textContent = '';
    }
};

trialForm.addEventListener('submit', e => {
    e.preventDefault();
    
    checkEmptyFields(formGroups);

    InputFieldValidation(emailPattern, emailInput, 'Looks like this is not an email');

    InputFieldValidation(passwordPattern, passwordInput, 'Looks like this is not a password');
});