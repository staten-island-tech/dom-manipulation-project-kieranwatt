const DomSelectors = {
    button: document.getElementById("btn"),
    text: document.querySelector("#text"),
    box: document.getElementById("big-black-box"),
    points: document.querySelectorAll(".point"),
    input: document.querySelector(`#input`),
};

DomSelectors.box.insertAdjacentHTML("beforebegin", `<h1>bladee</h1>`)
DomSelectors.button.addEventListener("click", function () {
    let input = DomSelectors.input.value;
    console.log(input);
})

function backroundAndText(background, text) {
    background.style.backroundColor = "red"; //not working+want to change to a backroundimage
    text.innerHTML = "BLADEE";
    text.style.fontSize = "55px";
}

/* backroundAndText(DOMSelectors.box, DomSelectors.text); */

DomSelectors.button.addEventListener("click", function() {
    backroundAndText(DomSelectors.box, DomSelectors.text);
});

function changeLi(){
    let pointIndex = 1;
    DomSelectors.points.forEach((point) => {
        point.addEventListener("click", function () {
            point.textContent = `Bladee is the best ${pointIndex}`;
            pointIndex++;
        });
    });
}
changeLi();