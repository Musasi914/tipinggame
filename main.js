'use strict';


const result = document.querySelector('#result');
const target = document.querySelector('#target');
let word;
let loc;

const words = [
    'red',
    'blue',
    'pink'
];
function setWord() {
    word = words.splice(Math.floor(Math.random() * words.length),1)[0];
    target.textContent = word;
    loc = 0;
}

let startTime;
let isPlaying;
document.addEventListener('click', () => {
    if(isPlaying) {
        return;
    }
    isPlaying = true;
    setWord();
    startTime = Date.now();
})
document.addEventListener('keydown', (e) => {
    if (e.key !== word[loc]) {
        return;
    }
    loc++;
    target.textContent = '_'.repeat(loc) + word.slice(loc);

    if (loc === word.length) {
        if(words.length === 0) {
            const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
            result.textContent = `Finished! ${elapsedTime} seconds`
        }
        setWord();
    }
})