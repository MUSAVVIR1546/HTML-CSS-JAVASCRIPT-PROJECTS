const joke = document.querySelector('.joke');
const button = document.querySelector('.btn');
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "I would tell you a joke about construction, but I'm still working on it.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I only know 25 letters of the alphabet. I don't know y.",
    "Why did the bicycle fall over? Because it was two-tired!",
    "How does a penguin build its house? Igloos it together.",
    "Why do cows wear bells? Because their horns don't work!",
    "I asked the librarian if the library had books on paranoia. She whispered, 'They're right behind you.'",
    "What did one wall say to the other wall? 'I'll meet you at the corner!'",
    "Why are elevator jokes so classic and good? They work on many levels.",
    "Why did the math book look sad? It had too many problems.",
    "How do you organize a space party? You planet!",
    "Why did the tomato turn red? Because it saw the salad dressing.",
    "Why don’t oysters donate to charity? Because they are shellfish.",
    "What’s orange and sounds like a parrot? A carrot.",
    "How do you make a tissue dance? You put a little boogie in it.",
    "Why couldn’t the bicycle find its way home? It lost its bearings."
];

//1 random jokes.
function generateJoke() {
    let randomInd = Math.floor(Math.random() * jokes.length);
    joke.textContent = jokes[randomInd];
};

button.addEventListener("click", generateJoke);