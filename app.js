let inputValue = document.getElementById("input").value();
let btn = document.querySelector(".btn")
let youchoose = document.querySelector(".youchoose")
let compchoose = document.querySelector(".compchoose")


btn.addEventListener('click', function () {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let number = numbers[Math.floor(Math.random() * numbers.length)]
    compchoose.innerHTML = number
    youchoose.innerHTML = inputValue
    if (compchoose > youchoose) {
        button.innerHTML = "HIGH!!"
    } else if (compchoose < youchoose) {
        button.innerHTML = "LOW!!"
    } else if (compchoose == youchoose) {
        button.innerHTML = "YOU WIN!!"
    }
})

