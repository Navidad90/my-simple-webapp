document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a success message (In a real application, you would send this data to a server)
    document.getElementById('formMessage').innerText = `Thank you, ${name}! We have received your message.`;
    
    // Optionally, reset the form
    document.getElementById('contactForm').reset();
});
