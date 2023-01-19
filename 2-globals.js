// No browser -> No window
// There are GLOBALS, such as

// __dirname: path to current directory

console.log(__dirname)

// __filename: file name

console.log(__filename)

// require: function to use modules (CommonJS)
// module: info about current module (file)
// process: info about env (program's environment)

setInterval(() => {
  console.log('hello world')
}, 1000)