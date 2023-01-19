const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err)
    return
  } else {
    const first = data
    readFile('./content/second.txt', 'utf8', (err, data) => {
      if (err) {
        console.log(err)
        return
      } else {
        const second = data
        writeFile(
          './content/result-async.txt',
          `Here is the result:\n${first}\n${second}\n`,
          (err, data) => {
            if (err) {
              console.log(err)
              return
            } else {
              console.log('done with this task')
            }
          }
        )
      }
    })
  }
})

console.log('starting the next task')