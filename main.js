const DomSelectors = {
    form: document.querySelector("#input-form"),
    box: document.querySelector("box"),
    bladeename: document.querySelector("namebladee"),
    bladeebday: document.querySelector("bdaybladee"),
    bladeeimg: document.querySelector("imagebladee"),
};

DomSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    const card = {
        bladeename: DomSelectors.namebladee.value,
        bladeeimg: DomSelectors.imagebladee.value,
        bladeebday: DomSelectors.bdaybladee.value,
    }
    injectCard(card);
    deletee();
});

function injectCard(card) {
    DomSelectors.box.insertAdjacentHTML(
        "afterbegin",`
        <div class="bladeecard1">
        <div class="card">
        <h1> ${card.title} </h2>
        <img class="card-img" src="${card.bladeeimg}" alt="">
        <h3>${card.bladeebday}</p>
        </div>
        <button class="removeBtn" onclick="removeCard()">Remove<button>
        </div>`)
}

function clearFields() {
    DomSelectors.bladeebday.value = "";
    DomSelectors.bladeeimg.value = "";
    DomSelectors.bladeename.value = "";
};

function deletee() {

}