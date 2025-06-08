const countValEl = document.getElementById("counterValue")!
const buttonEl = document.getElementById("counterButton")!

let res = await fetch('/api/getCounter'); 
let counter = await res.json();

countValEl.textContent = counter.counter

buttonEl?.addEventListener("click", async (event) => {
    console.log("help")

    let res = await fetch('/api/incrementCounter'); 
    let counter = await res.json();

    countValEl.textContent = counter.counter
})    



