const sections = Array.from(document.querySelectorAll("section"));

const labelIcon = sections[0].querySelector("label img");

const nameDisplayers = Array.from(sections[1].getElementsByClassName("displaysFullName"));

const emailDisplayers = Array.from(sections[1].getElementsByClassName("displaysEmailAddress"));

const userPhotoSpan = document.getElementById("userPhotoSpanId");

const userPhotoDisplayer = document.getElementById("displaysUserPhoto");

const GitHubUsernameDisplayer = document.getElementById("displaysGitHubUsername");

const emailSpan = document.getElementById("emailAddressSpanId");



function labelIconUpdater() {

    const userPhoto = URL.from(document.getElementById("userPhotoInput").value);

     labelIcon.src = userPhoto;

     labelIcon.alt = "Your photography";
}



function currentChanger() {
    sections.forEach(section => {
        section.classList.toggle("column");
    });
}



function largeFileError(uploadedImage) {

    const file = uploadedImage.files[0];

    return file && file.size > 500000; // 500KB
}



function invalidFileTypeError(uploadedImage) {

    const file = uploadedImage.files[0];

    const allowedTypes = ["image/jpeg", "image/png"];

    return file && !allowedTypes.includes(file.type);
}



function photoErrorTester(photo) {

    let errorSpoted = false;

    if(largeFileError(photo)){

        userPhotoSpan.textContent = "File too large. Cut your photo, take its screenshot, do your tricks to make it smaller.";

        userPhotoSpan.classList.add("error");

        errorSpoted = true;
    }

    if(invalidFileTypeError(photo)){

        userPhotoSpan.textContent = "Upload a file.jpeg or a file.png, so we can place it in your ticket.";

        userPhotoSpan.classList.add("error");
        
        errorSpoted = true;
    }

    return errorSpoted;
}



function emailErrorTester(email){

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return !emailPattern.test(email);
}



function writer(photo, name, email, git) {

    userPhotoDisplayer.src = photo;

    userPhotoDisplayer.alt = `Photograph of ${name}`;

    nameDisplayers.forEach(nameDisplayer => {
        nameDisplayer.textContent = name;
    });

    emailDisplayers.forEach(emailDisplayer => {
        emailDisplayer.textContent = email;
    });

    GitHubUsernameDisplayer.textContent = git;
}



function brusher() {

    labelIcon.src = "./assets/images/icon-upload.svg";

    labelIcon.alt = "";

    userPhotoDisplayer.src = "";

    userPhotoDisplayer.alt = "";

    nameDisplayers.forEach(nameDisplayer => {
        nameDisplayer.textContent = "";
    });

    emailDisplayers.forEach(emailDisplayer => {
        emailDisplayer.textContent = "";
    });

    GitHubUsernameDisplayer.textContent = "";
}



function clearErrors() {

    userPhotoSpan.textContent = "Upload your photo (JPG or PNG, max size: 500KB).";

    userPhotoSpan.classList.remove("error");

    emailSpan.classList.remove("error");
}



function generateTicket(){

    document.querySelector("form").preventDefault();


    const userPhoto = URL.from(document.getElementById("userPhotoInput").value);
    
    const name = document.getElementById("nameInput").value;
    
    const emailAddress = document.getElementById("emailAddressInput").value.trim();
    
    const GitHubUsername = document.getElementById("GitHubUsernameInput").value;


    if(photoErrorTester(userPhoto)) return;


    if(emailErrorTester(emailAddress)){

        emailSpan.classList.add("error");

        return;
    }
    

    writer(userPhoto, name, emailAddress, GitHubUsername);

    currentChanger();

     clearErrors();
}



function refresher() {

    brusher();

    currentChanger();
}
