// imports
import { Nanny,html } from 'nanny-state';
// Helper Functions
// (number,number) => number
const randomNumber = (n,m) => Math.ceil(Math.random()*(n - m)+m)
// () => string
function generateNumber(){
  const multipleOfThree = randomNumber(333,34)*3
  console.log(multipleOfThree)
  return {number: multipleOfThree.toString()}
}
// (array,array) => array
function getColours(guesses,number){
  return guesses.map((digit,index) => number.includes(digit) ? digit.toString() === number[index] ? "green" : "yellow": "black")
}
// View
// state => html string
const View = state => html`
<div id="app" ?data-darkMode=${state.dark}>
<header>
<h1>Numble</h1>
${state.started ? html`<div class="scores"><p>Streak: ${state.streak}</p><p>Best: ${state.best}</p></div>` : ""}
</header>
${state.started ? 
html`<div id="guesses">
${state.guesses.map((guess,index) => html`<div class="row">${guess.map((number,i) => html`<div class="${state.guessCount > index && getColours(guess,state.number)[i]}"}>${number}</div>`)}</div>`)}</div>
<p id="feedback">${state.feedback}</p>
<div id="keyboard">
${state.digits.map((colour,index) => html`<button onclick=${e => Update(appear(index))} class="${colour}" ?disabled=${!state.playing}>${index}</button>`)}
  <button class="functional" onclick=${e => Update(remove)}>DELETE</button>
  <button class="functional" onclick=${check(state.guesses[state.guessCount],state.number, state.count)}>ENTER</button>
</div>
<button ?disabled=${state.playing} class="${state.playing ? "hidden" : ""}" onclick=${e => Update(nextNumber)}>PLAY AGAIN</button>
<footer>
<button onclick=${e => Update(finish)}>FINISH</button>
<button onclick=${e => Update(e => Update({dark: !state.dark}))}>${state.dark ? "LIGHT" : "DARK"} MODE</button>
</footer>
`
:
html`
<h2>Guess the 3-digit multiple of 3</h2>
<button class="action" onclick=${e => Update(start)}>START</button>`}</div>
`
// initial state
const State = {
  ...generateNumber(),
  started: false,
  playing: false,
  digits: Array(10).fill('grey'),
  guesses: [Array(3).fill(null),Array(3).fill(null),Array(3).fill(null),Array(3).fill(null)],
  count: 0,
  guessCount: 0,
  feedback: "Guess 3 digits",
  streak: 0,
  best: 0,
  LocalStorageKey: "numble-local-storage",
  dark: false,
  View
}
// Event handlers
const check = (guesses, number, count) => event => {
  if (count < 3) Update({feedback: "too short"})
  else {
    const numble = guesses.join('') === number
    const colours = getColours(guesses,number)
  Update(provideFeedback(guesses,colours, numble))
  }
}
// Transformer functions
// state => state
const start = state => ({
  started: true,
  playing: true
})
// array => state => state
const appear = guess => state => ({
  guesses: state.guesses.map((array,index) => index === state.guessCount ? array.map((digit,index) => index === state.count ? guess : digit) : array),
  count: state.count + 1,
})
// state => state
const remove = state => ({
  guesses: state.guesses.map((array,index) => index === state.guessCount ? array.map((digit,index) => index === state.count - 1 ? null : digit) : array),
  count: state.count - 1
})
// (array,array,Boolean) => state => state
const provideFeedback = (guesses,colours,numble) => state => ({
  digits: state.digits.map((colour,index) => guesses.includes(index) ? colours[guesses.indexOf(index)] : colour),
  count: 0,
  guessCount: state.guessCount + 1,
  feedback: numble ? "NUMBLE!" : state.guessCount < 3 ? "Keep going..." : `Nope! It was ${state.number}`,
  playing: !numble && state.guessCount < 3,
  streak: numble ? state.streak + 1 : state.guessCount < 3 ? state.streak : 0,
  best: numble && state.streak + 1 > state.best ? state.streak + 1 : state.best
})
// state => state
const nextNumber = state => ({
  ...State,
  ...generateNumber(),
  started: true,
  playing: true,
  streak: state.streak,
  best: state.best,
  dark: state.dark
})
// state => state
const finish = state => ({
  ...State,
  ...generateNumber(),
  best: state.best,
  dark: state.dark
})
// Start a new Nanny State
const Update = Nanny(State)