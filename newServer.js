const express = require('express');
const app = express();
// const calcRoute = require('./route/v1/user');
const calcRoute = require('./route/api/calculate')
const PORT = 5000;

app.use(express.json());
// app.use('/v1/user', calcRoute);
app.use('/api/calculate', calcRoute);


app.get('/api/calculate', (req, res)=>{
  res.status(200).json({message: 'working'});

});

app.listen(PORT, () =>{
  console.log(`Server is running on PORT: ${PORT}`);
});