/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  Grill it!
  https://www.codewars.com/kata/grill-it/train/javascript

  A grille cipher was a technique for encrypting a plaintext by writing it onto a sheet of paper through a pierced sheet (of paper or cardboard or similar). The earliest known description is due to the polymath Girolamo Cardano in 1550. His proposal was for a rectangular stencil allowing single letters, syllables, or words to be written, then later read, through its various apertures. The written fragments of the plaintext could be further disguised by filling the gaps between the fragments with anodyne words or letters. This variant is also an example of steganography, as are many of the grille ciphers. Wikipedia Link

  Task

  Write a function that accepts two inputs: message and code and returns hidden message decrypted from message using the code.
  The code is a nonnegative integer and it decrypts in binary the message.

  grille("abcdef", 5)  => "df"

  message : abcdef
  code    : 000101
  ----------------
  result  : df
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function grille(message, code) {
  let decodedMsg = ''

  // save binary in array and calculate diff of lengths
  let binaryArray = code.toString(2).split('')
  let diff = binaryArray.length - message.length

  // if binary is too long, trim from left side
  if (diff > 0) for (var i = 0; i < diff; i++) binaryArray.shift()

  // if binary is too short, add leading zeroes
  else if (diff < 0) {
    let zeroesArray = Array(Math.abs(diff)).fill('0')
    binaryArray = zeroesArray.concat(binaryArray)
  }

  // for each 1 in binaryArray, keep corresponding message item
  binaryArray.forEach((c, i) => {
    if (c == 1) decodedMsg += message[i]
  })

  return decodedMsg
}

// grille('', 5)
