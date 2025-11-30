const fs = require('fs')
const data=fs.readFileSync('testData.txt','utf8')
console.log(data)
console.log('file read successfully')