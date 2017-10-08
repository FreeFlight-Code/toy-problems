/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  CODING 3MIN: TIDY UP THE ROOM
  http://www.codewars.com/kata/coding-3min-tidy-up-the-room/train/javascript

  Give you a ```room```(n x n metrix), there are some sundries 
  (any character except spaces). Our task is to put the sundries 
  neatly placed in the upper left corner of the room(a small metrix).

  example1:
  ```
  room:[
  ["a"," "," "," "," "],
  [" "," ","b"," "," "],
  [" "," "," "," "," "],
  [" ","c"," "," "," "],
  [" "," ","d"," "," "]
  ]
  ```
  There are 4 sundries in the room(a,b,c,d), so we put them in the 2x2 matrix, output should be:
  ```
  [
  ["a","b"," "," "," "],
  ["c","d"," "," "," "],
  [" "," "," "," "," "],
  [" "," "," "," "," "],
  [" "," "," "," "," "]
  ]
  ```
  example2:
  ```
  room:[
  ["a"," "," "," "," "],
  [" "," ","b"," "," "],
  [" "," "," "," "," "],
  [" ","c"," "," "," "],
  [" "," ","d","e"," "]
  ]
  ```
  There are 5 sundries in the room(a,b,c,d,e), they cannot be put into the 2x2 matrix, 
  so we put them in the 3x3 matrix, output should be:
  ```
  [
  ["a","b","c"," "," "],
  ["d","e"," "," "," "],
  [" "," "," "," "," "],
  [" "," "," "," "," "],
  [" "," "," "," "," "]
  ]
  ```

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function sc(room){
  return ?
}