/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
    VALID BINARY CHRISTMAS TREE
    https://www.codewars.com/kata/valid-binary-christmas-tree/train/javascript

    Happy Holidays fellow Code Warriors!

    Santa just finished taking a data structures course, and thought it would be a great idea to build a Binary Christmas Tree! All of Santa's helpers created a Binary Christmas Tree, but not all of them meet his requirements. Can you write some code to validate the Binary Christmas Trees?

    Valid Binary Christmas Tree

    Write a function isValidTree that accepts a Binary Tree, and returns true if it meets Santa's requirements, false otherwise. Since the tree is a binary tree, each node can have 0, 1, or 2 children. The left and right properties can be used to access the current nodes left and right children. All nodes have an ornament property, which is the name of the ornament, and a color property, which represents the color of the ornament.

    Santa's Binary Christmas Tree Requirements

    A valid Binary Christmas Tree will meet the following requirements:

    Root node has a 'star' ornament
    Nodes with zero children (excluding the root node) have a 'blue' colored ornament
    Nodes with one or two children (excluding the root node) have a 'red' colored ornament
    Examples:

    isValidTree( {
      ornament: 'star', 
      color: 'yellow'
    } )// => returns true

    isValidTree( {
      ornament: 'star',
      color: 'yellow',
      left: {
        ornament: 'candy cane',
        color: 'blue'
      }
    } )// => returns true

    isValidTree( {
      ornament: 'star',
      color: 'yellow',
      right: {
        ornament: 'stocking',
        color: 'red'
      }
    } )// => returns false
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function isValidTree(tree){
  let valid = true; // Start true, but any infraction changes it permanently to false;

  if (tree.ornament !== 'star') return false; // Root node must have star
  if (!tree.left && !tree.right) return true; // If star but no children, no other requirements
  if (tree.left) { validNode(tree.left); } // Check children
  if (tree.right) { validNode(tree.right); } // Check children

  function validNode(node) { // Recursive function to check child nodes
    if (node.left) {
      if (node.color !== 'red') valid = false; // Parents must be red
      validNode(node.left); // Check children
    }
    if (node.right) {
      if (node.color !== 'red') valid = false; // Parents must be red
      validNode(node.right); // Check children
    }
    if (!node.left && !node.right && node.color !== 'blue') valid = false; // Blue if no children
  }

  return valid;
}