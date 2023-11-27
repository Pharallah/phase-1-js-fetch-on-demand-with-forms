const init = () => {
    // Grabs the form
    const inputForm = document.querySelector('form'); 
    
    // Adds an EL for the Submit/Prevents Default Behavior
    inputForm.addEventListener('submit', e => {
     e.preventDefault();
        
        // Accessses the User Input Value from the Event Object
        const input = document.querySelector('input#searchByID');

    // Fetches Data Based On User Input & Thru Interpolation, Plugs in the User's input on the URL being Fetched
    fetch(`http://localhost:3000/movies/${input.value}`)
        .then(res => res.json())
        .then(data => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');

            title.innerText = data.title;
            summary.innerText = data.summary;
    });
});
}

document.addEventListener('DOMContentLoaded', init);