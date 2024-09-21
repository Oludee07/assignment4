const express = require('express');
const router = express.Router();

const users = [] //simulates a database
//addition
router.post('/add', (req, res) =>{
  const {a, b} = req.body;
  let add =0;
  

  if(typeof a !== 'number' || typeof b !== 'number'){
    res.status(400).json({message: 'Pls enter only numbers'});
    return;
  }else {
    add= (a + b);
  }
  
 res.status(201).json(add);
});

//subtraction
router.post('/subtract', (req, res) =>{
  const {a, b} = req.body;
  let subtract =0;
  

  if(typeof a !== 'number' || typeof b !== 'number'){
    res.status(400).json({message: 'Pls enter only numbers'});
    return;
  }else {
    subtract= (a - b);
  }
  
 res.status(201).json(subtract);
});

//multiplication
router.post('/multiply', (req, res) =>{
  const {a, b} = req.body;
  let multiply =0;
  

  if(typeof a !== 'number' || typeof b !== 'number'){
    res.status(400).json({message: 'Pls enter only numbers'});
    return;
  }else {
    multiply= (a * b);
  }
  
 res.status(201).json(multiply);
});

//Division
router.post('/divide', (req, res) =>{
  const {a, b} = req.body;
  let divide =0;
  

  if(typeof a !== 'number' || typeof b !== 'number'){
    res.status(400).json({message: 'Pls enter only numbers'});
    return;
  }else if(a===0 || b===0) {
    res.status(400).json({message:' division by zero is not permitted'});
    return;
  }else{
    divide= (a / b);
  }
  
 res.status(201).json(divide);
});





module.exports=router;