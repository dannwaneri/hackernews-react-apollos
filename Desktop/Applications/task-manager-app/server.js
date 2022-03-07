const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();


// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api/v1", (req, res) => {
    res.json({ message: "Hello from server!" });
  });


// All other GET requests not handled before will return our React app
// And if a GET request 
//comes in that is not handled by our /api/v1 route, our server will respond with our React app.
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});