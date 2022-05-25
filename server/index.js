const express = require('express');

const app = express();

app.get('/ablt/attach/:code', (req, res) => {
  function ABLT_FN(name, fn){
	var fne;
	app.get("/ablt/run/" + name, (req, res) => {
		res.send(fn())
	})
  }
  eval(atob(req.params.code))
  res.send("attached")
});

app.listen(3000, () => {
  console.log('server started');
});
