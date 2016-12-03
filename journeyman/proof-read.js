/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  PROOF READ
  https://www.codewars.com/kata/proof-read/train/javascript

  You've just finished writing the last chapter for your novel when a virus suddenly infects your document. It has swapped the 'i's and 'e's in 'ei' words and capitalised random letters. Write a function which will:

  a) remove the spelling errors in 'ei' words. (Example of 'ei' words: their, caffeine, deceive, weight)

  b) only capitalise the first letter of each sentence. Make sure the rest of the sentence is in lower case.

  Example: He haD iEght ShOTs of CAffIEne. --> He had eight shots of caffeine.
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function proofread(str) {
  str = str.toLowerCase().replace(/ie/ig, 'ei');
  str = str.replace(/^[a-z]/, function(x) {return x.toUpperCase()});
  str = str.replace(/[.?!]\s([a-z])/, function(x) {return x.toUpperCase();});
  return str;
}
