const quotes=[
" Believe in yourself even when no one else does.",
"Small steps today create big success tomorrow.",
"Your effort matters more than your excuses.",
"Dream big, start small, act now.",
"Progress is better than perfection.",
"Hard times build strong people.",
"Stay patient; good things take time.",
"Your mindset shapes your future.",
"Don’t wait for chances—create them.",
"Success begins with self-discipline.",
"Failures are lessons in disguise.",
"Keep going; you’re closer than you think.",
"Confidence grows when you face fear.",
"Every day is a new opportunity.",
"Work hard in silence, let results speak.",
"Focus on growth, not comparison.",
"Believe, act, and never quit.",
"Consistency beats talent when talent stops.",
"Your struggle today is your strength tomorrow.",
"Learn, improve, repeat.",
"Great things come from humble beginnings.",
"Stay hungry for progress.",
"Discipline turns dreams into reality.",
"One positive thought can change your day.",
"Courage starts with trying.",
"Don’t stop until you’re proud.",
"Your future needs your effort today.",
"Every setback prepares a comeback.",
"Action is the key to success.",
"You are stronger than you think.",
]

// const button = document.querySelector('button');
// const quote = document.querySelector('h1');

// button.addEventListener('click',()=>{
//     const index = Math.floor(Math.random()*30);

//     quote.textContent = quotes[index];
// })

const button =  document.querySelector('button');
const quote = document.querySelector("h1");

button.addEventListener('click',()=>{
    const index = Math.floor(Math.random()*30);
    quote.textContent= quotes[index];
})

