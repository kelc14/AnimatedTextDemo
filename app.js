const h1 = document.querySelector('h1');

function getRandomRGB (){
    const R = Math.floor(Math.random() *256)
    const G = Math.floor(Math.random() *256)
    const B = Math.floor(Math.random() *256)

    return `rgb(${R}, ${G}, ${B})`;
}

// h1.style.color = getRandomRGB();
// setInterval(function(){
//     h1.style.color = getRandomRGB();

// }, 500)


const letters = document.querySelectorAll('.letter');

const intervalID = setInterval(function(){
    for (let letter of letters){
        letter.style.color = getRandomRGB();
    }
}, 1000);

// how to clear
// ^set as a variable that we can call, then clear interval(intervalID);