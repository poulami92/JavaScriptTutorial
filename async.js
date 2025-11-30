const fs = require('fs')
fs.readFile('testData.txt','utf8',function(err,data){
    console.log(data)
    //console.log('file read successfully')
})
console.log('file read successfully')