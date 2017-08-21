/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
    CAESAR CIPHER HELPER
    https://www.codewars.com/kata/caesar-cipher-helper/javascript

    Write a class that, when given a string, will return an uppercase string with each letter shifted forward in the alphabet by however many spots the cipher was initialized to.

    For example:

    var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
    c.encode('Codewars'); // returns 'HTIJBFWX'
    c.decode('BFKKQJX'); // returns 'WAFFLES'
    If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var CaesarCipher = function (shift) {
  const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); // array of ABCs

  return {
    encode: function (msg) {
      return msg.toUpperCase().replace(/./gi, x => {
        const indexOfNext = (abc.indexOf(x) + shift) % 26;
        return abc.indexOf(x) === -1 ? x : abc[indexOfNext];
      });
    }
    ,
    decode: function(msg) {
      return msg.toUpperCase().replace(/./gi, x => {
        const indexOfPrev = (26 + abc.indexOf(x) - shift) % 26;
        return abc.indexOf(x) === -1 ? x : abc[indexOfPrev];
      });
    }
  };
};