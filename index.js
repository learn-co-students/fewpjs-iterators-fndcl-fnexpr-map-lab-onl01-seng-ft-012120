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

const titleCased = () => {                     //function titlecase()

  const returnArray = []
  for(let i= 0; i< tutorials.length; i++){
  let newArray = tutorials[i].split(" ").map(element => element[0].toUpperCase() + element.slice(1))

   returnArray.push(newArray.join(' '))
  }

return returnArray
  
}

