const path = require('path')

// My PLATFORM-SPECIFIC SEPARATOR
const separator = path.sep
console.log(separator)

// Returns the RELATIVE PATH for a sequence of path segments
const filePath = path.join('\\content', 'subfolder', 'test.txt')
console.log(filePath)

// Returns BASENAME (last segment) of a path
const base = path.basename(filePath)
console.log(base)

// Returns the ABSOLUTE PATH for a sequence of path segments
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)