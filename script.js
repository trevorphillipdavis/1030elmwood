document.getElementById('tourForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = this;
    const data = new FormData(form);
    
    // Sends form data asynchronously to the specified endpoint
    fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Thank you for your message!');
            form.reset();
        } else {
            alert('Oops! There was a problem submitting your form. Please try again.');
        }
    }).catch(error => {
        alert('Oops! There was a connectivity issue submitting your form.');
    });
});
