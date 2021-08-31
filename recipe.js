const express = require('express');
const axios = require ('axios');
const { random } = require('lodash');
const recipe = express.Router();


recipe.get('/newrecipe',(req,res)=>{
 
  var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://random-recipes.p.rapidapi.com/ai-quotes/1',
  headers: {
    'x-rapidapi-host': 'random-recipes.p.rapidapi.com',
    'x-rapidapi-key': '44b0e7563dmsh7773bb30cb7db4ap16d1ecjsnf5e475e0174f'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
  console.log(response.data[0].id,response.data[0].title,response.data[0].url);
  res.render('recipes',{id:response.data[0].id,title:response.data[0].title,
       recipe:response.data[0].url});
}).catch(function (error) {
	console.error(error);
});
 
  
});

module.exports= recipe;