
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const ulEl = document.getElementById("ul-el")

const storageLeads = JSON.parse(localStorage.getItem("myLeads"))
//truthy-falsy value
if (storageLeads) {
    myLeads = storageLeads
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
            </a>
        </li>
    `
        //Templete string
    }
    ulEl.innerHTML = listItems
}

// const tabs = [
//     { url: "https://www.linkedin.com/in/per-harald-borgen/" }
// ]

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    });
})

inputBtn.addEventListener("click", function () {

    myLeads.push(inputEl.value)
    inputEl.value = null
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)


})

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})












