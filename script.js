let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

// validation name
let nameError = document.getElementById("name-error");

function validateName(){
    let name = document.getElementById("full-name").value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    
    
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name";
        return false;
    }

    nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`
    return true;
}
