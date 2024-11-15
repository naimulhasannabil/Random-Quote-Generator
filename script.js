// This is just Quote Generate Code.
const randomQuote = [
    'Believe in yourself! Have a faith in your abilities! Without a humble but reasonable confident in your own powers you cannot be successful or happy.',
    'Life is 10% what happens to you 90% how you react to it.',
    'Ever tired. Ever failed. No matter. Try Again. Fail again. Fail better.',
    'With the new day comes new strength and new thoughts.',
    'If you are going to hell, Keep going.',
];

const quoteElement = document.querySelector('#quote');
const authorElement = document.querySelector('#author');
const button = document.querySelector('#button');


button.addEventListener('click', function(){
   const quoteIndex = Math.floor(Math.random() * randomQuote.length);
//    console.log(quoteIndex);
   quoteElement.textContent = randomQuote[quoteIndex];
});