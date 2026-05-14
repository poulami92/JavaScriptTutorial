let arr = [1,2,2,3,4,4];

let dub = arr.filter(function(n,index) {

    return (arr.indexOf(n) !== index)
})


console.log(dub);