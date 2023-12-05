"use strict"
let shelfUl = document.getElementById("onShelf")
let storeUl = document.getElementById("inStore")

let types = ["Szilva", "Alma", "Kajszi", "Füge", "Birs", "Málna", "Dió"]

types.forEach((element, i) => {
    let li = document.createElement("li");
    li.onclick = selectElement
    li.ondblclick = dblPlacement
    li.innerHTML = element

    if (i < 3) {
        li.id = "shelfItem"
        shelfUl.append(li)
    } else {
        li.id = "storeItem"
        storeUl.append(li)
    }
});

function selectElement(element) {
    let li = element.srcElement
    // if (!li.classList.contains("selected")) {
    //     li.classList.add("selected");
    // } else {
    //     li.classList.remove("selected");
    // }

    li.classList.toggle("selected");
}

function dblPlacement(element) {
    let li = element.srcElement
    if (li.id == "shelfItem") {
        li.id = "storeItem"
        storeUl.append(li)
    } else {
        li.id = "shelfItem"
        shelfUl.append(li)
    }
}