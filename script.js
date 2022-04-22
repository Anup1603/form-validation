// ------Selectors-----

const form = document.getElementById('form')
const password1El = document.getElementById('password1')
const password2El = document.getElementById('password2')
const messageContainer = document.querySelector('.message-container')
const message = document.getElementById('message')


// Functions

let isValid = false;
let passwordMatch = false;

const validateForm = function () {
    // using contraint API
    isValid = form.checkValidity()
    // console.log(isValid);

    // style main message
    if (!isValid) {
        message.textContent = "Please ! Fill all the required Field ";
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }

    // check to see if password match
    if (password1El.value === password2El.value) {
        passwordMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
        message.textContent = "Form fill successfully !!";
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
    else {
        passwordMatch = false;
        message.textContent = "Password can't match. Please sure it !!";
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }
}

const storeFormData = function () {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };

    // Do something with user data
    console.log(user);
    // localStorage.setItem(user)

}

const processFormDate = function (e) {
    e.preventDefault();
    validateForm();
    // submit data
    if (isValid && passwordMatch) {
        storeFormData()
    }
}



// Event Listener
form.addEventListener('submit', processFormDate)