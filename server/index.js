const express = require('express');

const app = express();

app.get('/ablt/attach/:code', (req, res) => {
  function ABLT_FN(name, fn){
	var fne;
	app.get("/ablt/run/" + name, (req, res) => {
		if (req.query.args) {
			var args = atob(req.query.args).split(",");
			res.send(fn(...args))
		} else {
			fn()
		}
	})
  }
  eval(atob(req.params.code))
  res.send("attached")
});

app.listen(3000, () => {
  console.log('server started');
});
