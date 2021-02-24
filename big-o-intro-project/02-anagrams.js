
function firstAnagram(str1, str2) {
  // Code goes here ....
  let word = str1.split("");
  let second = str2.split("");
  for(let i = 0; i < word.length; i++){
    let letter = word[i];
    if(second.includes(letter)){
      let index = second.indexOf(letter)
      second.splice(index, 1)
    }
  }
  if(second.length === 0){
    return true;
  }
  return false;

}
console.log(thirdAnagram("gizmo", "sally"));    // => false
console.log(thirdAnagram("elvis", "lives"));    // => true



function secondAnagram(str1, str2) {
  let sorted1 = str1.split("").sort().join("")
  let sorted2 = str2.split("").sort().join("")
  return sorted1 === sorted2;

}


function thirdAnagram(str1, str2) {
  let word1 = str1.split("")
  let word2 = str2.split("")
  let obj1 = {}
  let obj2 = {}
  if(word1.length !== word2.length){
    return false;
  }
  for(let i = 0; i < word1.length; i++){
    if(obj1[word1[i]]){
      obj1[word1[i]] += 1;
    }
    if(!obj1[word1[i]]){
      obj1[word1[i]] = 1
    }
    if(obj2[word2[i]]){
      obj2[word2[i]] += 1;
    }
    if(!obj2[word2[i]]){
      console.log("hello")
      obj2[word2[i]] = 1
    }
    // let obj1Keys = Object.keys(obj1)
    // let obj2Keys = Object.keys(obj2)
    for(key in obj1){
      if(obj1[key] !== obj2[key]){
        console.log(obj1[key], obj2[key])
        console.log(obj2, key)
        return false;
      }
    }
  }
  return true;
}


function fourthAnagram(str1, str2) {
  // Code goes here ....
}
