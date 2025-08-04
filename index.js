const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to My Business App!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
// This Is The My Triggered Statement Into My Business Web App Repository, After Adding My YAML File And Secret To My Created And Deployed Web App.
