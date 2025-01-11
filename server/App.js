const express = require("express");
const path = require("path"); // Import the path module
const helmet = require("helmet");

const app = express();
const port = 3001;

// Serve static files (CSS, JS, images) from the 'client/public' folder
app.use(express.static(path.join(__dirname, '..', 'client', 'public')));

app.use(express.static(path.join(__dirname, '..', 'client', 'views')));




// Use Helmet to set CSP
app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"], // Allow content only from the same origin
        scriptSrc: ["'self'"], // Block inline JavaScript and third-party scripts
        styleSrc: ["'self'", "'unsafe-inline'"], // Allow inline styles only if needed
        imgSrc: ["'self'", "data:"], // Allow images from the same origin and data URIs
        objectSrc: ["'none'"], // Disallow <object>, <embed>, and <applet>
        frameSrc: ["'none'"], // Disallow iframes
        connectSrc: ["'self'"], // Allow XHR/WebSocket connections only to the same origin
        fontSrc: ["'self'"], // Allow fonts only from the same origin
        upgradeInsecureRequests: [], // Enforce HTTPS
      },
    })
  );
  




// Routes
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the server! By Api ):' });
});

app.get('/test', (req, res) => {
    res.status(403).send(`<h1>Forbidden: You do not have access to this resource.</h1>`);
});

// Serve index.html from client/public folder when visiting the root route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'public', 'index.html'));
});

// Serve other HTML files from client/views folder
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'views', 'login.html')); // Serve login.html from 'client/views'
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'views', 'about.html')); // Serve about.html from 'client/views'
});

app.get('/blogs', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'views', 'blogs.html')); // Serve blogs.html from 'client/views'
});













// Start the server
app.listen(port, () => {
    console.log(`SERVER RUNNING ON PORT ${port}`);
});
