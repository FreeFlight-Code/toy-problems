/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  TEXT ALIGN JUSTIFY
  https://www.codewars.com/kata/text-align-justify/train/javascript

  Description:

  Your task in this Kata is to emulate text justification in monospace font. You will be given a single-lined text and the expected justification width. The longest word will never be greater than this width.

  Here are the rules:

  Use spaces to fill in the gaps between words.
  Each line should contain as many words as possible.
  Use '\n' to separate lines.
  Gap between words can't differ by more than one space.
  Lines should end with a word not a space.
  '\n' is not included in the length of a line.
  Large gaps go first, then smaller ones: 'Lorem---ipsum---dolor--sit--amet' (3, 3, 2, 2 spaces).
  Last line should not be justified, use only one space between words.
  Last line should not contain '\n'
  Strings with one word do not need gaps ('somelongword\n').
  Example with width=30:

  Lorem  ipsum  dolor  sit amet,
  consectetur  adipiscing  elit.
  Vestibulum    sagittis   dolor
  mauris,  at  elementum  ligula
  tempor  eget.  In quis rhoncus
  nunc,  at  aliquet orci. Fusce
  at   dolor   sit   amet  felis
  suscipit   tristique.   Nam  a
  imperdiet   tellus.  Nulla  eu
  vestibulum    urna.    Vivamus
  tincidunt  suscipit  enim, nec
  ultrices   nisi  volutpat  ac.
  Maecenas   sit   amet  lacinia
  arcu,  non dictum justo. Donec
  sed  quam  vel  risus faucibus
  euismod.  Suspendisse  rhoncus
  rhoncus  felis  at  fermentum.
  Donec lorem magna, ultricies a
  nunc    sit    amet,   blandit
  fringilla  nunc. In vestibulum
  velit    ac    felis   rhoncus
  pellentesque. Mauris at tellus
  enim.  Aliquam eleifend tempus
  dapibus. Pellentesque commodo,
  nisi    sit   amet   hendrerit
  fringilla,   ante  odio  porta
  lacus,   ut   elementum  justo
  nulla et dolor.

  Also you can always take a look at how justification works in your text editor or directly in HTML (css: text-align: justify).

  Have fun :)
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var sampleStr = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.';
var sampleLen = 15;

var justify = function(str, len) {
  var remainingArray = str.split(' ');
  var justified = '';

  // while there are still lines to justify (not the last)
  while(remainingArray.join(' ').length > len) {
    var line = '';

    // while the line is not yet the desired length
    while (line.length <= len) {
      // add next word if line would not exceed desired length
      if ((line + ' ' + remainingArray[0]).length <= len) {
        line = line + ' ' + remainingArray.splice(0, 1);
        line = line.replace(/^\s/, '');
      }
      // otherwise add spaces to justify the line to desired length
      else {
        var extraSpaces = len - line.length;
        var lineArray = line.split(' ');
        var numWords = lineArray.length;
        // add in extra spaces in the following way:
        for (var i = 0; i < extraSpaces; i++) {
          var k = i;
          // k circles back to first word after a space is added to penultimate word in that line (last word doesn't get a space)
          if (k > numWords - 2) {
            k = k % (numWords - 1);
          }
          lineArray[k] += ' ';
        }
        line = lineArray.join(' ');
        line = line + '\n';
      }
    }
    justified = justified + line;
  }
  // add remaining (unjustified) words
  justified = justified + ' ' + remainingArray.join(' ');
  justified = justified.replace(/\s*\n/g, '\n').replace(/\n\s*/g, '\n');
  return justified;
};

justify(sampleStr, sampleLen);
