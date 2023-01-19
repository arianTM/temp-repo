// CommonJS, every file is a module (by default)
// Modules: encapsulated code (only share minimum)

const { john, peter } = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

sayHi('susan')
sayHi(john)
sayHi(peter)