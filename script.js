let submitError = document.getElementById("submit-error");

// validation name
let nameError = document.getElementById("name-error");

function validateName() {
    let name = document.getElementById("full-name").value;

    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }


    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write full name";
        return false;
    }

    nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`
    return true;
}

// validation phone
let phoneError = document.getElementById("phone-error");

function validatePhone() {
    let phone = document.getElementById("phone-number").value;

    if (phone.length == 0) {
        phoneError.innerHTML = "Phone no is required";
        return false;
    }
    if(phone.length !== 9){
        phoneError.innerHTML = "Phone no should be 9 digits";
        return false;
    }
    if(!phone.match(/^[0-9]{9}$/)){
        phoneError.innerHTML = "Only digits please";
        return false;
    }

    phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`
    return true;
}


// validation email
let emailError = document.getElementById("email-error");

function validateEmail(){
    let email = document.getElementById("email").value;

    if (email.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Email invalid";
        return false;
    }

    emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`
    return true;
}


// validation textarea valid 30 letter
let messageError = document.getElementById("message-error");

function validateMessage(){
    let message = document.getElementById("message").value;
    let required = 30;
    let left = required - message.length;
    if(left > 0){
        messageError.innerHTML = left + " more charecters required";
        return false;
    }
    messageError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`
    return true;
}