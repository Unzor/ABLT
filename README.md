# ABLT
Run Node.js functions from SPWN code. (lol everyone will hate me for this)

# Usage
### index.spwn (using SPGHTT)
```ts
let ablt = import ablt
$.print(ablt.ABLT_FN("hello", ['world']))
```
### index.js
```js
function hello(name) {
	return "Hello, " + name + "!"
}

ABLT_FN("hello", hello)
```
To use "index.js", run:
```
node connector index.js
```

Or, to use a function when ran, create a file named "preload.json", and put this in: 
```json
{
  "files": [
    "file.js"
  ]
}
```
