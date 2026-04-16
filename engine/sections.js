const sections = document.querySelectorAll('section');

async function changeSection() {

    sections.forEach(section => {

        section.classList.toggle('hidden');
    });
}