// imports
import { Nanny,html } from 'nanny-state';
// Helper Functions
// (number,number) => number
const randomNumber = (n,m) => Math.ceil(Math.random()*(n - m)+m)
// () => string
const generateNumber = () => (3*randomNumber(333,34)).toString()
// (array,array) => array
const getColours = (guesses,number) => guesses.map((digit,index) => number.includes(digit) ? digit.toString() === number[index] ? "green" : "yellow": "black")
// View
// state => html string
// View
// state => html string
const View = state => html`
<div id="app" ?data-darkMode=${state.dark}>
<header>
<h1>Numble</h1>
${state.started && !state.showStats ? html`<div class="scores"><p>Streak: ${state.streak}</p><p>Best: ${state.best}</p></div>` : ""}
</header>
<main>
${
state.showStats ?
html`<h2>Stats</h2>
<div id="stats">
<p>Played: ${state.played} games</p>
<div id="bars">
${state.stats.map((stat,index,array)=> html`<div class="guess-number">${index + 1}:</div><div class="stat" style=${`grid-column: 3/ ${stat ?  5 + ~~(17*stat/[...array].sort((a,b)=>b-a)[0]): 5};`}>${stat}</div>`)}
</div>
<p>Numble %: ${Math.round(100*state.stats.reduce((sum,n)=>sum+n)/state.played)}</p>
<p>Best Streak: ${state.best}</p>
<button onclick=${e=> navigator.share({title:"NUMBLE!",text:`My best Numble streak is ${state.best} ${"🟢".repeat(state.best)}` })}>Share</button>
</div>
`
:
state.started ?
html`<div id="guesses">
${state.guesses.map((guess,index) => html`<div class="row">${guess.map((number,i) => html`<div class="${state.guessCount > index ? getColours(guess,state.number)[i] : "grey"}"}>${number}</div>`)}</div>`)}</div>
<p id="feedback">${state.feedback}</p>
<div id="keyboard">
${state.digits.map((colour,index) => html`<button id=${"key-"+index} onclick=${e => Update(appear(index))} class="${colour}" ?disabled=${!state.playing}>${index}</button>`)}
  <button id="key-delete" class="functional" onclick=${e => Update(remove)}>DELETE</button>
  <button id="key-enter" class="functional" onclick=${check(state.guesses[state.guessCount],state.number, state.count)}>ENTER</button>
</div>
<button ?disabled=${state.playing} class="${state.playing ? "hidden" : ""}" onclick=${e => Update(nextNumber)}>PLAY AGAIN</button>`
:
html`
<h2>How Many Numbles Can You Get?</h2>
<p>Guess the Numble in 4 tries</p>
<p>Each Numble is a multiple of three</p>
<p>After each guess, the colour of the circles will change to let you know how close (or far) you were</p>
<h3>Example</h3>
<div class="guesses"><div class="row"><div class="green">1</div><div class="yellow">2</div><div class="black">3</div></div></div>
<p>1 is in the number and also in the right place.</p>
<p>2 is in the number but in the wrong place</p>
<p>3 isn't in the number at all</p>`
}
</main>
<footer>
<button onclick=${e => Update(state.playing ? finish : start)}>${state.started ? "END" : "START"}</button>
<button onclick=${e => Update(e => Update({showStats: !state.showStats}))}>${state.showStats ? "CLOSE" : "STATS"}</button>
<button onclick=${e => Update(e => Update({dark: !state.dark}))}>${state.dark ? "LIGHT" : "DARK"} MODE</button>
</footer>
</div>`


// initial state
const State = {
  number: generateNumber(),
  started: false,
  playing: false,
  showStats: false,
  digits: Array(10).fill('grey'),
  guesses: [Array(3).fill(null),Array(3).fill(null),Array(3).fill(null),Array(3).fill(null)],
  count: 0,
  guessCount: 0,
  feedback: "Guess 3 digits",
  played: 0,
  streak: 0,
  best: 0,
  dark: false,
  stats: [0,0,0,0],
  LocalStorageKey: "numble-share",
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
  playing: true,
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
  best: numble && state.streak + 1 > state.best ? state.streak + 1 : state.best,
  stats: numble ? state.stats.map((n,i) => i === state.guessCount ? n + 1 : n) : state.stats,
  played: numble || state.guessCount === 3 ? state.played + 1 : state.played
})
// state => state
const nextNumber = state => ({
  ...State,
  number: generateNumber(),
  started: true,
  playing: true,
  streak: state.streak,
  best: state.best,
  dark: state.dark,
  played: state.played,
  stats: state.stats
})
// state => state
const finish = state => ({
  ...State,
  number: generateNumber(),
  played: state.played,
  stats: state.stats,
  best: state.best,
  dark: state.dark,
  showStats: false,
})
// Start a new Nanny State
const Update = Nanny(State)