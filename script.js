const facts = [
    "I am a fan of MLBB esport and i am super excited for the new season of mpl.",
    "I competed in a badminton touranament.",
    "I am an only child.",
    " I know how to play chess and quite good at it.",
    "I am a speed cuber my best ave in ,y peak is 13s.",
    "I like anime back in 2020 now i read manga, mahwa, and manhua.",
    "I also like reading novels, mostly chinese novels.",
    " I also like to eat.",
    "I love math.",
    "I love problem solving.",
    " I am a freindly person.",
    " I hate morning."
];

function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

function showRandomFact() {
    const factContainer = document.getElementById('currentFact');
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factContainer.textContent = randomFact;
}

function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message! I will get back to you soon.');
        // Here you would typically send this data to a server
    } else {
        alert('Please fill out all fields.');
    }
}
