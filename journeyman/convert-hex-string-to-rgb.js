/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
    CONVERT HEX STRING TO RGB
    https://www.codewars.com/kata/convert-a-hex-string-to-rgb/train/javascript

    When working with color values in JavaScript it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a hexStringToRGB() function that meets these requirements:

    Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
    Returns an object with the structure {r:255, g:153, b:51} where r, g, and b range from 0 through 255
    Note, your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF").

    Example

    hexStringToRGB("#FF9933") // returns {r:255, g:153, b:51}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// Solution #1
hexStringToRGB("#FF9933");
function hexStringToRGB(hex) {
  var rgb = hex.match(/[^#]{2}/g).map(item => {
    return parseInt(item, 16);
  });
  return {r: rgb[0], g: rgb[1], b: rgb[2]};
}

// Solution #2
function hexStringToRGB2(hex) {
  return {
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16)
  }
}