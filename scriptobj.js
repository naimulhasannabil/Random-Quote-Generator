const randomQuotes = [
    {
      quote :  'Believe in yourself! Have a faith in your abilities! Without a humble but reasonable confident in your own powers you cannot be successful or happy.',
      author : 'Norman Vincent Peale',
    },
    {
       quote : 'Life is 10% what happens to you 90% how you react to it.',
       author : 'Charles R. Swindoll',
    },
    {
      quote :   'Ever tired. Ever failed. No matter. Try Again. Fail again. Fail better.',
      author : 'Samuel Beckett',
    },
    {
      quote : 'With the new day comes new strength and new thoughts.',
      author : 'Eleanor Roosevelt',
    },
    {
      quote : 'If you are going to hell, Keep going.',
      author : 'Winston Churchill',
    },
];

const quoteElement = document.querySelector('#quote');
const authorElement = document.querySelector('#author');
const button = document.querySelector('#button');


button.addEventListener('click', function(){
   const quoteIndex = Math.floor(Math.random() * randomQuotes.length);
//    console.log(quoteIndex);
   quoteElement.textContent = randomQuotes[quoteIndex].quote;
   authorElement.textContent = randomQuotes[quoteIndex].author;
});