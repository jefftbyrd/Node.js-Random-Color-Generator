import { argv } from 'node:process';
import ansis, { black, cyan, green, inverse, red } from 'ansis';

function rgb2hex(r, g, b) {
  try {
    var rHex = parseInt(r).toString(16).padStart(2, '0');
    var gHex = parseInt(g).toString(16).padStart(2, '0');
    var bHex = parseInt(b).toString(16).padStart(2, '0');
  } catch (e) {
    return false;
  }
  if (rHex.length > 2 || gHex.length > 2 || bHex.length > 2) return false;
  return '#' + rHex + gHex + bHex;
}

// console.log(rgb2hex(1, 2, 4));
console.log(ansis.hex(rgb2hex(255, 200, 50))`this is the text`);
