const form = document.getElementById("form");

const ticket = document.getElementById("ticket");

const uploadedImage = document.getElementById("imageInput");

const maxSize = document.getElementById("maxSize");

const nameInput = document.getElementById("nameInput");

const emailInput = document.getElementById("emailInput");

const emailSpan = document.getElementById("emailSpan");

const GitHubInput = document.getElementById("GitHubInput");

const displaysGitHubUsername = document.getElementById("displaysGitHubUsername");

const displaysEmailAddress = document.getElementById("displaysEmailAddress");

const photoReciver = document.getElementById("participantPhoto");

function currentChanger() {

    if(form.classList.contains("current")){

        form.classList.remove("current");

        ticket.classList.add("current");
    }
    else{

        ticket.classList.remove("current");

        form.classList.add("current");
    }
}

function largeFileError() {

    const file = uploadedImage.files[0];

    return file && file.size > 500000; // 500KB
}

function invalidFileTypeError() {

    const file = uploadedImage.files[0];

    const allowedTypes = ["image/jpeg", "image/png"];

    return file && !allowedTypes.includes(file.type);
}

function invalidEmailError(){

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return !emailPattern.test(emailInput.value.trim());
}

function errorTester(){

    let errorSpoted = false;

    if(largeFileError()){

        maxSize.textContent = "File too large. Cut your photo, take its screenshot, do your tricks to make it smaller.";

        maxSize.classList.add("error");

        errorSpoted = true;
    }

    if(invalidFileTypeError()){

        maxSize.textContent = "Upload a file.jpeg or a file.png, so we can place it in your ticket.";

        maxSize.classList.add("error");
        
        errorSpoted = true;
    }

   if(invalidEmailError()){

    emailSpan.textContent = "Enter a valid email adress, please. Its very helpfull.";

    emailSpan.classList.add("error");

    errorSpoted = true;
   }

        return errorSpoted;

}

function clearErrors() {

    maxSize.textContent = "Upload your photo (JPG or PNG, max size: 500KB).";

    maxSize.classList.remove("error");

    emailSpan.textContent = "";

    emailSpan.classList.remove("error");
}

function photoManager(){

    const file = uploadedImage.files[0];

    const imageUrl = URL.createObjectURL(file);// Convert the file to a URL

    photoReciver.src = imageUrl;

    photoReciver.style.display = "block";

    photoReciver.alt = `photograph of ${nameInput.value}`;
}

function nameFixer(){

    const dfn = document.getElementsByClassName("displaysFullName");

    const displaysFullName = Array.from(dfn);

    return displaysFullName;
}

let hasAlredyErrored = false;

function ticketGenerate(){

    if(errorTester()){

        hasAlredyErrored = true;

        return;
    }

for (let nameReciver of nameFixer()) nameReciver.textContent = nameInput.value;

displaysEmailAddress.textContent = emailInput.value;

displaysGitHubUsername.textContent = GitHubInput.value;

photoManager();

    currentChanger();

    if(hasAlredyErrored){

        hasAlredyErrored = false;

        clearErrors();
    }

}
