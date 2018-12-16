// Variables 
const quotes = ["I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst then you sure as hell don't deserve me at my best.",
"You've gotta dance like there's nobody watching Love like you'll never be hurt Sing like there's nobody listening And live like it's heaven on earth.", "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", "A friend is someone who knows all about you and still loves you.", "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.", "We accept the love we think we deserve.", "It is better to be hated for what you are than to be loved for what you are not.","It is not a lack of love, but a lack of friendship that makes unhappy marriages.", "As he read, I fell in love the way you fall asleep: slowly, and then all at once." ]

let btn = document.getElementById('btn');
// adds on event listener
btn.addEventListener('click', function(){
    // generate random number
    let Random = Math.floor(Math.random() * quotes.length);
    // place the quote when the button is pushed
    document.getElementById('quote-box').innerHTML = quotes[Random];
});

// add event listiner on drop down