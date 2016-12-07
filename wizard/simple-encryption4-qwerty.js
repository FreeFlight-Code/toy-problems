/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  SIMPLE ENCRYPTION #4 - QWERTY
  https://www.codewars.com/kata/simple-encryption-number-4-qwerty/train/javascript

  You have to write two methods to encrypt and decrypt strings. Both methods have two parameters:

  1. The string to encrypt/decrypt
  2. The Qwerty-Encryption-Key (000-999)
  The rules are very easy:

  The crypting-regions are these 3 lines from your keyboard:
  1. "qwertyuiop"
  2. "asdfghjkl"
  3. "zxcvbnm,."

  If a char of the string is not in any of these regions, take the char direct in the output.
  If a char of the string is in one of these regions: Move it by the part of the key in the
  region and take this char at the position from the region.
  If the movement is over the length of the region, continue at the beginning.
  The encrypted char must have the same case like the decrypted char!
  So for upperCase-chars the regions are the same, but with pressed "SHIFT"!

  The Encryption-Key is an integer number from 000 to 999. E.g.: 127

  The first digit of the key (e.g. 1) is the movement for the first line.
  The second digit of the key (e.g. 2) is the movement for the second line.
  The third digit of the key (e.g. 7) is the movement for the third line.

  (Consider that the key is an integer! When you got a 0 this would mean 000. A 1 would mean 001. And so on.)
  You do not need to do any prechecks. The strings will always be not null and will always have a length > 0. You do not have to throw any exceptions.

  An Example:

  Encrypt "Ball" with key 134
  1. "B" is in the third region line. Move per 4 places in the region. -> ">" (Also "upperCase"!)
  2. "a" is in the second region line. Move per 3 places in the region. -> "f"
  3. "l" is in the second region line. Move per 3 places in the region. -> "d"
  4. "l" is in the second region line. Move per 3 places in the region. -> "d"
  --> Output would be ">fdd"
  Hint: Don't forget: The regions are from an US-Keyboard!
  In doubt google for "US Keyboard."


  This kata is part of the Simple Encryption Series:
  Simple Encryption #1 - Alternating Split
  Simple Encryption #2 - Index-Difference
  Simple Encryption #3 - Turn The Bits Around
  Simple Encryption #4 - Qwerty

  Have fun coding it and please don't forget to vote and rank this kata! :-)
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  Encrypt fn with optional reverse argument (used by decrypt fn)
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  function encrypt(text, key, reverse) {
    var regions = ['qwertyuiop', 'QWERTYUIOP', 'asdfghjkl', 'ASDFGHJKL', 'zxcvbnm,.', 'ZXCVBNM<>'];

    // Need to add leading zeroes in case key is number with fewer than 3 digits
    key = '000' + key.toString();
    key = key.substr(key.length - 3);
    key = key[0] + key[0] + key[1] + key[1] + key[2] + key[2];

    text = text.replace(/./g, function(x) {
      // Determine which of the six regions each character is in (index 0–5)
      var indexOfRegion = regions.map(function(c, i, a) {
        if (c.indexOf(x) !== -1) return i.toString();
        else return 0;
      }).filter(function(c) {return c}); // Filter out incorrect regions
      // If character is not in any region, return the character without encrypting
      if (!indexOfRegion.length) return x;
      // indexOfRegion should be number, not an array of a number, so:
      indexOfRegion = indexOfRegion[0];

      var indexOfCharInString = regions[indexOfRegion].indexOf(x);
      var moveToRight = Number(key[indexOfRegion]); // movement, based on key
      var regionLength = regions[indexOfRegion].length;
      // Reverses order of movement if decrypt fn passes in reverse argument
      if (reverse) moveToRight = Number(key[indexOfRegion]) + regionLength - moveToRight - moveToRight;

      // If movement to right goes outside region, movement wraps back to start of region
      return regions[indexOfRegion].charAt((indexOfCharInString + moveToRight) % regionLength);
    });
    return text;
  }


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  Decrypt fn simply runs encrypt and passes in true for third argument, reversing the encryption
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  function decrypt(text, key) {
    return encrypt(text, key, true);
  }
