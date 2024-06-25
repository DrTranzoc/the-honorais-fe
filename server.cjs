const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'dist' directory
const distDir = path.join(__dirname, 'dist');
app.use(express.static(distDir));

// Handle every other request with index.html, which will contain
// a script tag to your application JavaScript bundle.
app.get('*', (req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

// Set the port
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is now running on http://localhost:${PORT}`);
});