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
        e.preventDefault();
        errorElement.innerText = '';
        const notesContainer = document.querySelector('.notes-container');
        const card = document.createElement('div');
        let newTitle = document.createElement('h1'); 
        let newNote = document.createElement('p');
        const btnContainer = document.createElement('div'); 
        let btnViewDetail = document.createElement('button'); 

        card.classList.add('card');
        btnContainer.classList.add('btn-view-container');
        btnViewDetail.classList.add('btn-view-detail');

        newTitle.innerText = title;
        newNote.innerText = note;
        btnViewDetail.innerText = 'View Detail';

        btnContainer.appendChild(btnViewDetail);
        card.appendChild(newTitle);
        card.appendChild(newNote);
        card.appendChild(btnContainer);
        notesContainer.appendChild(card);
    }


    if(messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }
});


function showModel(e){
    const noteDetail = e.target.parentNode.previousElementSibling;

    console.log(noteDetail);
}