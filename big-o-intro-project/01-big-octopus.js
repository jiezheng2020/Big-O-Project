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
  let sorted = fishes.sort((a, b) => b.length - a.length)     //based on string's length
  return sorted[0];
}
// console.log(nlognBiggestFish(fishies))


function linearBiggestFish(fishes) {
  let longest = fishes[0]
  for(let i=1; i<fishes.length; i++) {
    if(fishes[i].length > longest.length) {
      longest = fishes[i]
    }
  }
  return longest
}

// console.log(linearBiggestFish(fishies))

tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
  for (let i=0;i<tilesArray.length;i++) {
    if(direction === tilesArray[i]) return i;
  }
}

// console.log(slowDance('up',tilesArray)) // 0
// console.log(slowDance('right',tilesArray)) // 2
// console.log(slowDance('down',tilesArray)) // 4



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
  console.log(tilesObj)
  return tilesObj[direction]
}

// console.log(fastDance('up',tilesObj)) // 0
// console.log(fastDance('right',tilesObj)) // 2
// console.log(fastDance('down',tilesObj)) // 4