let letters= ["cat", "cut", "bat"];

// use a for loop to check each element in the
// array and write to the console "the word cut is in the list", 
// if the word "cut" is in the list.


for (let i=0; i<letters.length; ++i) {
    let word = letters[i];
    if (word === "cut") {
      console.log("the word cut it is in the list");
    }
  }