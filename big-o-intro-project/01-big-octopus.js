const fishies = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'];

function quadraticBiggestFish(fishes) {
  let longest = fishes[0];

  for(let i = 1; i < fishes.length; i++){
    let word = fishes[i];
    let counter = 0;
    for (let j = 0; j < word.split("").length; j++){
      counter ++;
    }

    if (counter > longest.split("").length){

      longest = word
    }
  }
  return longest;
}
 //console.log(quadraticBiggestFish(fishies));

function nlognBiggestFish(fishes) {
  // we can splited in half/ sublist1,2 and pass into resursive calls
  //if()
  let sorted = fishes.sort((a, b) => b.length - a.length)     //based on string's length
  //console.log(sorted)
  return sorted[0];

  //console.log(sublist1, sublist2);



}
console.log(nlognBiggestFish(fishies))


function linearBiggestFish(fishes) {
  // Code goes here ...
}


tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
  // Code goes here ...
}


tilesObj = {
  "up": 0,
  "right-up": 1,
  "right": 2,
  "right-down": 3,
  "down": 4,
  "left-down": 5,
  "left": 6,
  "left-up": 7
}
function fastDance(direction, tilesObj) {
  // Code goes here ...
}
