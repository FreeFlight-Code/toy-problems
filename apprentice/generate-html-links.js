/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
    GENERATE HTML LINKS
    https://www.codewars.com/kata/generate-html-links/train/javascript
    
    Generate HTML links

    We need a HTML menu.... but writing HTML over and-over-again is boooring... Let's just generate it instead!

    Task:
    Write a function generateMenu() with the following inputs/output:

    Inputs:
    menuItems: An array of objects (with url and text properties), which represents our menu items

    Output:
    A string of HTML containing an anchor tag for each element of menuItems (with the appropriate href attribute and text content)
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function generateMenu (menuItems) {
  var outputString = "";
  for (var i = 0; i < menuItems.length; i++){
    var anchorString = "<a href=\"" + menuItems[i].url + "\">" + menuItems[i].text + "</a>";
    outputString += anchorString;
  }
  return outputString;
}