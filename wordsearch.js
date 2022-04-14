const transpose = function(matrix) {
    let newMatrix = [];

    for (let i = 0; i < matrix[0].length; i++) {
      let arr = [];
      
      for (let j = 0; j < matrix.length; j++) {
       arr.push(matrix[j][i]);
      }
      newMatrix.push(arr);
    }
    return newMatrix;
   };


const wordSearch = (letters, word) => { 
    const vertical = transpose(letters).map(ls => ls.join(""));
      //  console.log(verticalJoin);
    //const vertical = verticalJoin.map(ls => ls.join(''));
        //map(letters => letters.join (''))
    for (l of vertical) {
        if (l.includes(word)) {
            return true
        }
    }
  
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        //console.log(l)
        if (l.includes(word)) {
            return true;
        } 
    }
    return false;
};
module.exports = wordSearch
//[[1],[2],]
wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'SEINFELD')


// was paired with Ziggy.

  