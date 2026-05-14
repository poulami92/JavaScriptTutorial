let arr=[5,8,9,11]

let maxNum=arr.reduce(function(max,curr)
{
  if(curr>max)
  {
    max=curr;
  }
  return max;
},arr[0])

console.log(maxNum);