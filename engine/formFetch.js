const baseURL = 'http://localhost:8080';

const nameInput = document.getElementById("nameInput");

const emailInput = document.getElementById("emailInput");

const githubInput = document.getElementById("githubInput");



export default async function sendForm (endpoint, formData) {

    try{
        const response = await fetch(`${baseURL}${endpoint}`, {method: 'POST', body: formData});

        return await response.json();
    }
    
    catch (error) {
        
        console.error(error);

        alert(`An error occurred while sending the form. Please, try again later.
            
            More details:
            
            ${error}`);
    }
}


 
 async function collectForm () {

    const formData = new FormData();

    const name = await validateName();

    formData.append("name", name);

    const email = await validateEmail();

    formData.append("email", email);

    const github = await validateGitHub();

    formData.append("github", github);

    const image = await validateImage();

    formData.append("image", image);

    return formData;
}


 
async function useForm () {

   const formData = await collectForm();

   const backendResponse = await sendForm("/generate-ticket", formData);

   buildTicket(backendResponse);

   changeSection();
}