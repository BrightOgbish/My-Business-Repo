const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log("Someone just visited the homepage!");
  res.send("Welcome to Bright’s Deployed App — my-business-web-app!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
// This Is The My Second Triggered Statement Into My Business Web App Repository, After Adding My YAML File And Secret To My Created And Deployed Web App.
