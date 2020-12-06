import { shuffle } from 'lodash';

function generatePassword(length, isNum, isSpecChar) {
  let password = '';
  let numDigits = 0;
  let numSpecChars = 0;

  if (isNum && isSpecChar) {
    numDigits = Math.floor(length / 3);
    numSpecChars = Math.floor(length / 3);
  } else if (isNum) {
    numDigits = length / 2;
  } else if (isSpecChar) {
    numSpecChars = length / 2;
  }

  password = generate(length, numDigits, numSpecChars);

  return password;
}

function getRandomChar(charset) {
  const min = 0;
  const max = charset.length - 1;
  const pos = Math.floor(Math.random() * (max - min)) + min;

  return charset[pos];
}

function getRandomNum() {
  return Math.floor(Math.random() * 10);
}

function generate(length, numOfDigits = 0, numOfSpecChars = 0) {
  const tempArray = [];
  const numOfLetters = length - numOfDigits - numOfSpecChars;
  let password = '';

  for (let i = 0; i < numOfLetters; i++) {
    let letter = getRandomChar(letters);
    letter = i % 3 === 0 ? letter.toUpperCase() : letter;
    tempArray.push(letter);
  }

  for (let i = 0; i < numOfDigits; i++) {
    tempArray.push(getRandomNum());
  }

  for (let i = 0; i < numOfSpecChars; i++) {
    tempArray.push(getRandomChar(specialChars));
  }

  password = shuffle(tempArray).join(' ').replace(/\s+/g, '');

  return password;
}

const specialChars = [
  ']',
  '[',
  '?',
  '/',
  '<',
  '~',
  '#',
  '`',
  '!',
  '@',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '+',
  '=',
  '}',
  '|',
  ':',
  '"',
  ';',
  '_',
  '.',
  '>',
  '{',
];

const letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'r',
  's',
  't',
  'u',
  'w',
  'z',
];

export default generatePassword;
