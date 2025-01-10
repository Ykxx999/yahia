let fbtn = document.getElementById("f-btn")
let sbtn = document.getElementById("s-btn")
const output = document.getElementById('output');



// Add an event listener to the button
fbtn.addEventListener('click', function() {
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
 
sbtn.addEventListener("click", () => {
    let s = window.open("http://evil.com")
    window.print()
})


















// Add event listeners to the buttons
// fbtn.addEventListener('click', function() {
//     fetch("/api/message")
// });

// sbtn.addEventListener('click', function() {
//     let s = window.open("http://evil.com");
//     alert(0)

  
    // Wait for the new window to load
    // s.onload = function() {
        // Access the new window's console and log something
        
        
        //s.console.log("<script>alert()</script>");
        //    };


// });