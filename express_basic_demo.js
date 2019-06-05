require("express")
require("mysql")



const express = require('express')
const app = express()
app.get('/', (req, res) => {
  var htm = "Hello World , click link to show paramter .."
  				+ "<br> <a href='/showname/test123'>show name of test123</a>"
  				+ "<br> <a href='/showname/name=test567'>show name of test567</a>";
  res.send( htm )

})

app.get('/showname/:name',(req,res) => {
	console.log(req)
	var name =  req.params.name 
	var htm = " req = " + req 
				+ "<br>req.params.name = " + name 
	res.send( htm )
})

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})
