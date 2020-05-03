const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let newTutorials = tutorials.map(toUpperCase)
  console.log(newTutorials)
  return newTutorials
}


function toUpperCase(string) {
  return string.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

// slice() method returns a shallow copy of a portion of an array into a new array object
// toUpperCase() method is used to convert the string value to uppercase.

