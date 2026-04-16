const nameInput = document.getElementById("nameInput");

const emailInput = document.getElementById("emailInput");

const githubInput = document.getElementById("githubInput");

const imageInput = document.getElementById("imageInput");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emailErrorDisplayer = document.getElementById("emailErrorDisplayer");

const imageErrorDisplayer = document.getElementById("imageErrorDisplayer");



async function validateName () {

    const typedName = nameInput.value;

    const validatedName = typedName.trim()[0].toUpperCase() + typedName.trim().slice(1).toLowerCase();

    return validatedName.length > 0? validatedName: null;
}



async function validateEmail () {

    const typedEmail = emailInput.value.trim();

    const validEmail = emailPattern.test(typedEmail);

    if (validEmail) 

        return typedEmail;

    emailErrorDisplayer.classList.remove("hidden");

    return null;
}



async function validateGitHub(){

    const gitHub = githubInput.value.trim();

    return gitHub.startsWith('@')? gitHub: `@${gitHub}`;
}



async function validateImage () {

    const sentImage = imageInput.files[0];

    if (sentImage && sentImage.size <= 500000)

        return URL.createObjectURL(sentImage);

    imageErrorDisplayer.classList.remove("hidden");

    return null;
}