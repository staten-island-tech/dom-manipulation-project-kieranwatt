const DomSelectors = {
    form: document.querySelector("#bladeeform"),
    box: document.querySelector("#box"),
    bladeename: document.querySelector("#bladeename"),
    bladeebday: document.querySelector("#bladeebday"),
    bladeeimg: document.querySelector("#bladeeimg"),
};

DomSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    const card = {
        bladeename: DomSelectors.bladeename.value,
        bladeeimg: DomSelectors.bladeeimg.value,
        bladeebday: DomSelectors.bladeebday.value,
    };
    injectCard(card);
    clearFields();
});

function injectCard(card) {
    const cardHTML = `
        <div class="bladeecard1">
            <div class="card">
                <h1>${card.bladeename}</h1>
                <img class="card-img" src="${card.bladeeimg}" alt="">
                <h3>${card.bladeebday}</h3>
            </div>
            <button class="removeBtn" onclick="removeCard(this)">Remove</button>
        </div>
    `;
    DomSelectors.box.insertAdjacentHTML("beforeend", cardHTML);
}

const images = document.querySelectorAll('.card-img');

function clearFields() {
    DomSelectors.bladeebday.value = "";
    DomSelectors.bladeeimg.value = "";
    DomSelectors.bladeename.value = "";
}

function removeCard(element) {
    element.parentElement.remove();
}