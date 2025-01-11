let logbtn = document.getElementById("loginbtn")
let fpass = document.getElementById("forpass")
let output = document.getElementById("output")
let email = document.getElementById("email")
let pass = document.getElementById("pass")
let emailout = document.getElementById("emailout")
let passout = document.getElementById("passout")


fpass.addEventListener('click', function() {
    fetch('/api/message')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Parse JSON from the response
        })
        .then(data => {
            // Update the output element with the fetched message
            output.textContent = data.message;
        })
        .catch(error => {
            console.error('Error fetching the message:', error);
            output.textContent = 'Failed to fetch the message.';
        });
});



logbtn.addEventListener("click", () => {
    // Check if email and password fields are empty
    if (email.value === "" || pass.value === "") {
        // If either is empty, redirect to "/test"
        window.open("/test");
    }
    else {
        emailout.innerHTML = email.value
        passout.innerHTML = pass.value
    }
});


