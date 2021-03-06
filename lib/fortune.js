function fortuneTeller() {

    var randomQuote = "";
    var quotes = [
        "You can do anything, but not everything.",
        "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
        "The richest man is not he who has the most, but he who needs the least.",
        "You miss 100 percent of the shots you never take.",
        "Courage is not the absence of fear, but rather the judgement that something else is more important than fear.",
        "You must be the change you wish to see in the world.",
        "When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean.",
        "To the man who only has a hammer, everything he encounters begins to look like a nail.",
        "We are what we repeatedly do; excellence, then, is not an act but a habit.",
        "A wise man gets more use from his enemies than a fool from his friends.",
        "Do not seek to follow in the footsteps of the men of old; seek what they sought."
    ];

    randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return randomQuote;
}


module.exports = {
    getFortune: fortuneTeller
};


//In this file, create a module that exports one getFortune function

