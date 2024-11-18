document.addEventListener('DOMContentLoaded', function () {
    const savedEntries = JSON.parse(localStorage.getItem('formEntries')) || []; 
    const list = document.getElementById('entriesList');
    list.innerHTML = '';

    savedEntries.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.textContent = `Email: ${entry.email}, Name: ${entry.name}`;
        list.appendChild(listItem);
    });
});

document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('floatingInput').value;
    const name = document.getElementById('floatingName').value;

    const newEntry = { email: email, name: name };

    const savedEntries = JSON.parse(localStorage.getItem('formEntries')) || [];

    savedEntries.push(newEntry);

    localStorage.setItem('formEntries', JSON.stringify(savedEntries));

    document.getElementById('message').innerHTML = 'Thank you for subscribing! Your data has been saved locally.';

    document.getElementById('newsletterForm').reset();

    const list = document.getElementById('entriesList');
    const listItem = document.createElement('li');
    listItem.textContent = `Email: ${email}, Name: ${name}`;
    list.appendChild(listItem);
});