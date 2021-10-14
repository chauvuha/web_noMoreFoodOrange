
const btn = document.getElementById("button");
const input = document.getElementById("input")
const result = document.getElementById("result_now")
const white = document.getElementById("white")
const orange = document.getElementById("orange")
const brown = document.getElementById("brown")
const body = document.getElementById("body")
const wrapperRight = document.getElementById("wrapper-right")



function calculateNow() {
    console.log(Number(input.value));
    console.log(`${Math.round((input.value / 100 * 2.5) * 100) / 100}`)
    if (input.value <= 0) {
        result.innerHTML = ` <div id="result">
    Please enter a valid number!
</div>`
    } else {
        result.innerHTML = ` <div id="result">
    Your dog need ${Math.round((input.value / 100 * 2.5) * 100) / 100}kg of raw food.
</div>`
    }
}

function changeBackgrToPink() {
    body.style.backgroundColor="#ffacac";
    wrapperRight.innerHTML=`<img src="./assets/images/whitepaw.png">`
}

function changeBackgrToOrange() {
    body.style.backgroundColor="rgb(255, 151, 103)";
    wrapperRight.innerHTML=`<img src="./assets/images/orangepaw.png">`
}

function changeBackgrToBrown() {
    body.style.backgroundColor="rgb(255, 229, 144)";
    wrapperRight.innerHTML=`<img src="./assets/images/brownpaw.png">`
}

function changeBackgrToPinkAbout() {
    body.style.backgroundColor="#ffacac";
    wrapperRight.innerHTML=`<img src="../images/whitepaw.png">`
}

function changeBackgrToOrangeAbout() {
    body.style.backgroundColor="rgb(255, 151, 103)";
    wrapperRight.innerHTML=`<img src="../images/orangepaw.png">`
}

function changeBackgrToBrownAbout() {
    body.style.backgroundColor="rgb(255, 229, 144)";
    wrapperRight.innerHTML=`<img src="../images/brownpaw.png">`
}
