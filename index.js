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

const titleCased = (words) => {
  return tutorials.map(sentences => {
    let uncapitalized = sentences.split(' ')
    let capitalized = uncapitalized.map ( uncap => uncap.charAt(0).toUpperCase() + uncap.slice(1))
    let fixedSentences = capitalized.join(' ')
    return fixedSentences

  })
}
