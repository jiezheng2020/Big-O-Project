function badTwoSum(arr, targetSum) {
  for (let i = 0; i<arr.length; i++) {
    for (let j = i+1 ; j<arr.length; j ++) {
      if (arr[i] + arr[j] === targetSum) {
      return true;
      }
    }
  }
  return false
}

const arr = [0, 7, 1, 5];
// [0,1,5,7]
//quickSort [0,1,5]
//for Loop from 0, let difference = targetSum - left[i]
//if (left.includes(difference)){return true}
//if indexOf(difference)
console.log(okayTwoSum1(arr, 6)); // => should be true
console.log(okayTwoSum1(arr, 10)); // => should be false


function okayTwoSum1(arr, targetSum) {
  // Code goes here ...
  let left = []
  for(let i = 0; i < arr.length; i ++){
    if(arr[i] <= targetSum ){
      left.push(arr[i])
    }
  }
  for(let i = 0; i < left.length; i++){
    let difference = targetSum - left[i]
    let temp = left
    temp.splice(i, 1)
    if(temp.includes(difference)){
     return true;
    }
  }
     return false
}


function okayTwoSum2(arr, targetSum) {
  // Code goes here ...
}


function twoSum(arr, targetSum) {
  // Code goes here ...
}


function twoSumIndices(arr, targetSum) {
  // Code goes here ...
}
