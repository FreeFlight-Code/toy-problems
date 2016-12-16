/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  SPLIT WITHOUT LOSS
  https://www.codewars.com/kata/split-without-loss/train/javascript

  Most languages have a split function that lets you turn a string like “hello world” into an array like[“hello”, “world”]. But what if we don't want to lose the separator? Something like [“hello”, “ world”].

  Task:

  Your job is to implement a function, (split_without_loss in Ruby/Crystal, and splitWithoutLoss in JavaScript/CoffeeScript), that takes two arguments, str (s in Python), and split_p, and returns the string, split by split_p, but with the separator intact. There will be one '|' marker in split_p. str or s will never have a '|' in it. All the text before the marker is moved to the first string of the split, while all the text that is after it is moved to the second one. Empty strings must be removed from the output, and the input should NOT be modified.

  When tests such as (str = "aaaa", split_p = "|aa") are entered, do not split the string on overlapping regions. For this example, return ["aa", "aa"], not ["aa", "aa", "aa"].

  Examples (see example test cases for more):

  splitWithoutLoss("hello world!", " |") #=> ["hello ", "world!"]
  splitWithoutLoss("hello world!", "o|rl") #=> ["hello wo", "rld!"]
  splitWithoutLoss("hello world!", "h|ello world!") #=> ["h", "ello world!"]
  splitWithoutLoss("hello world! hello world!", " |")
                    #=> ["hello ", "world! ", "hello ", "world!"]
  splitWithoutLoss("hello world! hello world!", "o|rl")
                    #=> ["hello wo", "rld! hello wo", "rld!"]
  splitWithoutLoss("hello  hello  hello", " | ")
                    #=> ["hello ", " hello ", " hello"]
  splitWithoutLoss(" hello world", " |")
                    #=> [" ", "hello ", "world"]
  splitWithoutLoss("  hello hello hello", " |")
                    #=> [" ", " ", "hello ", "hello ", "hello"]
  splitWithoutLoss("  hello hello hello  ", " |")
                    #=> [" ", " ", "hello ", "hello ", "hello ", " "]
  splitWithoutLoss("  hello hello hello", "| ")
                    #=> [" ", " hello", " hello", " hello"]
  Also check out my other creations — Identify Case, Adding Fractions, Random Integers, Implement String#transpose, Implement Array#transpose!, Arrays and Procs #1, and Arrays and Procs #2

  If you notice any issues/bugs/missing test cases whatsoever, do not hesitate to report an issue or suggestion. Enjoy!
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
