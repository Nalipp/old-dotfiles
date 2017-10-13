// Things I forgot about javaScript

Number((1.666666).toFixed(3));
  => 1.667

[1, 4, 5, 3, 7].includes(3);
  => true

// rounding can somtimes cause problems
// http://www.jacklmoore.com/notes/rounding-in-javascript/

var largest = Number.MAX_VALUE;
var smallest = -Number.MIN_VALUE;

// slice
arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.slice(2, 4) 
  => [3, 4] // (makes a copy and dosen't mutate the original arr);
            // starts with the 2 position and returns 2 values because 4 minus 2 is 2
            // works with strings because you are just making copies of a portion of the string
  
// splice
arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.splice(2, 4) 
  => [3, 4, 5, 6] // essentially cuts out elements from the original arr
                  // starts with the 2 position and cuts out the next 4 (3, 4, 5, 6) permentatly from the original array
                  // returns the cut values
                  // arr is now [1, 2, 7, 8]
                  // does not work with strings because a string is an immutable primitive value (you can only make copies)
                  


