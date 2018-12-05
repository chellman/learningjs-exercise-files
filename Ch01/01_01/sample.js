var myNum = 32;

/**
 * Returns a random integer between 0 and limit
 *
 * @param {Number} limit
 */
function randomizer(limit) {
  var myNum = Math.floor(Math.random() * limit);

  console.log("myNum is " + myNum);
  console.log("Global myNum is " + window.myNum);

  return myNum;
}

randomizer(10);
