var fs = require("fs");
var filename = process.argv[2];
var file = fs.readFileSync(filename).toString();
fetch("http://localhost:3000/ablt/attach/" + btoa(file)).then(x => x.text()).then(x => {
	console.log(x);
})
