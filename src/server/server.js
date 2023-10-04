const express = require('express');
const app = express();
const cors = require('cors'); 
const fs = require('fs');
const path = require('path');
app.use(cors());

app.use(express.json());

app.post('/api/saveData', (req, res) => {
  const dataToSave = req.body;
  const folderPath = path.join(__dirname, 'assets');
  const filePath = path.join(folderPath, 'miscData.json');
  fs.writeFileSync(filePath, JSON.stringify(dataToSave, null, 2));
  res.json({ message: 'Data has been saved.' });
});

app.post('/api/saveBulletsData', (req, res) => {
    const dataToSave = req.body;
    const folderPath = path.join(__dirname, 'assets');
    const filePath = path.join(folderPath, 'data.json');
    fs.writeFileSync(filePath, JSON.stringify(dataToSave, null, 2));
    res.json({ message: 'Data has been saved.' });
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});