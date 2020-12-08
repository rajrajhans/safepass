import { shuffle } from 'lodash';

function generatePassword(length, isNum, isSpecChar, isAlphabets) {
  let password = '';
  let numDigits = 0;
  let numSpecChars = 0;
  let numLetters = 0;

  if (isNum && isSpecChar && isAlphabets) {
    numDigits = Math.floor(length / 3);
    numSpecChars = Math.floor(length / 3);
    numLetters = length - numDigits - numSpecChars;
  } else if (isNum && isSpecChar) {
    numDigits = Math.floor(length / 2);
    numSpecChars = length - numDigits;
  } else if (isSpecChar && isAlphabets) {
    numLetters = Math.floor(length / 2);
    numSpecChars = length - numLetters;
  } else if (isNum && isAlphabets) {
    numLetters = Math.floor(length / 2);
    numDigits = length - numLetters;
  } else if (isSpecChar) {
    numSpecChars = length;
  } else if (isNum) {
    numDigits = length;
  } else if (isAlphabets) {
    numLetters = length;
  }

  password = generate(length, numDigits, numSpecChars, numLetters);

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

function generate(
  length,
  numOfDigits = 0,
  numOfSpecChars = 0,
  numOfLetters = 0
) {
  const tempArray = [];
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
