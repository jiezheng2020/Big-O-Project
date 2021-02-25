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


const recurBSearchIdx = (nums, targetNum, offset = 0) => {
  if (nums.length === 0)
    return -1;

  let mid = Math.floor(nums.length / 2);
  let left = nums.slice(0, mid);
  let right = nums.slice(mid + 1);

  if (targetNum < nums[mid])
    return recurBSearchIdx(left, targetNum);
  else if (targetNum > nums[mid])
    return recurBSearchIdx(right, targetNum, mid + 1 + offset);
  else
    return mid + offset;
}


// function okayTwoSum1(arr, targetSum) {
//   // Code goes here ...
//   let left = []
//   for(let i = 0; i < arr.length; i ++){
//     if(arr[i] <= targetSum ){
//       left.push(arr[i])
//     }
//   }

//   for(let i = 0; i < left.length; i++){
//     let difference = targetSum - left[i]
//     let temp = left.slice(0,i).concat(left.slice(i+1))
//     if(temp.includes(difference)){
//      return true;
//     }
//   }
//      return false
// }



function okayTwoSum1(arr, targetSum) {  //   O(n) O(nlogn)
  for (let i = 0; i < arr.length; i++) {
    let targetNum = targetSum - arr[i]
    let searchArr = arr.slice(0, i).concat(arr.slice(i + 1))

    if(recurBSearchIdx(searchArr, targetNum)) {
      return true;
    }
  }
  return false;
}

// console.log(okayTwoSum1(arr, 6)); // => should be true
console.log(okayTwoSum1(arr, 10)); // => should be false


function okayTwoSum2(arr, targetSum) {
  // Code goes here ...
}


function twoSum(arr, targetSum) {
  // Code goes here ...
}


function twoSumIndices(arr, targetSum) {
  // Code goes here ...
}
