const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = tutorials.map(sentence => {
//   sentence.charAt(0).toUpperCase() + sentence.slice(1); 
// });

// titleCased();

// function titleCased() {
//   const titleCased = tutorials.map(sentence => { console.log(sentence);
//     sentence.charAt(0).toUpperCase() + sentence.slice(1); 
//   });
// }
// titleCased();

const titleCased = (input) => {
  return tutorials.map( line => {
    let letters = line.split(' ')
    let capitalizedTokens =
      letters.map( token => token.charAt(0).toUpperCase() + token.slice(1) )
    let response = capitalizedTokens.join(' ')
    return response
  });
}