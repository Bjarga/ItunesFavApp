const app = require("./server/server.js"); // Import the app from server.js

const PORT = process.env.PORT || 3001;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
