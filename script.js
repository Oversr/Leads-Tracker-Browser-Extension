// Assigning global variables
let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const deleteBtn = document.querySelector("#delete-btn");
const ulEl = document.querySelector("#ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// Function that renders the Url links as <li> elements
function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems +=
        `<li>
            <a href=${leads[i]} target="_blank">${leads[i]}</a>
        </li>`;
    }
    ulEl.innerHTML = listItems;
}

// if statement that will render myLeads array if truthy
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

// Event listeners
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
});

deleteBtn.addEventListener("click", function() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})