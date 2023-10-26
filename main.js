const DomSelectors = {
    button: document.getElementById("btn"),
    text: document.querySelector("#text"),
    box: document.getElementById("big-black-box"),
    points: document.querySelectorAll(".point"),
    input: document.querySelector(`#input`),
};

/* DomSelectors.box.insertAdjacentHTML("beforebegin", `<h1>bladee</h1>`)
DomSelectors.button.addEventListener("click", function () {
    let input = DomSelectors.input.value;
    console.log(input);
})

function backroundAndText(background, text) {
    background.style.backroundColor = "red"; //not working+want to change to a backroundimage
    text.innerHTML = "BLADEE";
    text.style.fontSize = "55px";
} */


DomSelectors.button.addEventListener("submit", function(event) {
    event.preventDefault();
    const card = {
        title: DomSelectors.title.value,
        image: DomSelectors.image.value,
        description: DomSelectors.description.value,
    };
    injectCard(card);
    clearFields();
});

function injectCard(card) {
    DomSelectors.container.insertAdjacentHTML(
        "afterbegin",`
        <div class="bladeecard1">
        <div class="card">
        <h2> 

    `)
}


function clearFields() {
    DomSelectors.title.value = "";
    DomSelectors
    DomSelectors
};