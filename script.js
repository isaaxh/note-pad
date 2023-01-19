const form = document.querySelector('form');
const btnAddNote = document.querySelector('.btn-add-note');

form.addEventListener('submit', (e) => {
    const title = document.querySelector('#title').value;
    const note = document.querySelector('#note').value;
    const errorElement = document.querySelector('.error-message');
    let messages = [];


    if (title === '' || title === null || 
    note === '' || note === null) {
        e.preventDefault();
        messages.push("Please fill all fields");
    } else {
        
    }

    if(messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }

    

});