import { argv } from 'node:process';
import chalk from 'chalk';
import convert from 'color-convert';

let saturation = 0;
let luminosity = 0;
let hexColor = '';
let hue = '';

const userHue = argv[2];
const userLum = argv[3];

if (argv.length < 3) {
  hexColor =
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
} else if (argv.length >= 3) {
  saturation = Math.ceil(Math.random() * (100 - 50) + 50);
  luminosity = Math.ceil(Math.random() * (70 - 20) + 20);
  if (userHue === 'red') {
    hue = Math.ceil(Math.random() * (10 - 0) + 0);
    hexColor = '#' + convert.hsl.hex(hue, saturation, luminosity);
  } else if (userHue === 'green') {
    hue = Math.ceil(Math.random() * (130 - 90) + 90);
    hexColor = '#' + convert.hsl.hex(hue, saturation, luminosity);
  } else if (userHue === 'blue') {
    hue = Math.ceil(Math.random() * (250 - 220) + 220);
    hexColor = '#' + convert.hsl.hex(hue, saturation, luminosity);
  }
}

if (argv.length === 4) {
  if (userLum === 'light') {
    saturation = Math.ceil(Math.random() * (100 - 40) + 40);
    luminosity = Math.ceil(Math.random() * (70 - 50) + 50);
    hexColor = '#' + convert.hsl.hex(hue, saturation, luminosity);
  } else if (userLum === 'dark') {
    saturation = Math.ceil(Math.random() * (100 - 40) + 40);
    luminosity = Math.ceil(Math.random() * (25 - 9) + 9);
    hexColor = '#' + convert.hsl.hex(hue, saturation, luminosity);
  }
}

const generateShape = `
###############################
###############################
###############################
#####                     #####
#####       ${hexColor}       #####
#####                     #####
###############################
###############################
###############################
`;

console.log(chalk.hex(hexColor)`${generateShape}`);
