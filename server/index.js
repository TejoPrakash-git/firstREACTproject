const express = require('express');
const app = express();

// Middleware to parse JSON body
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'hello this is get api from express' });
});

app.post('/api/hello', (req, res) => {
  const data = req.body;
  res.json({ message: 'posted data', data });
});

app.get('/api1/hi',(req,res)=>{
    res.json({message:"this second api"})
})

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

