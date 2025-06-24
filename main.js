const beginnings = ["Today is the day", "The universe says", "You should know"];
const middles = ["you will find success", "a challenge awaits", "luck is on your side"];
const ends = ["so keep going!", "just breathe.", "and never look back."];

const randomSentence = (array1, array2, array3) =>{
  let beg = Math.floor(Math.random() * array1.length);
  let middle = Math.floor(Math.random() * array2.length);
  let end = Math.floor(Math.random() * array3.length);
  return `${array1[beg]} ${array2[middle]} ${array3[end]}`;
};

console.log(randomSentence(beginnings,middles,ends));