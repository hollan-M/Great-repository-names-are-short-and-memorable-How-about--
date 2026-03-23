"use strict";
const body = document.getElementById("body");
function create_text(text, parent, callback) {
    const parent_div = document.createElement("div");
    const text_array = [];
    for (let text_string of text) {
        if (text_string == " ") {
            text_string = "\u00a0";
        }
        const element = document.createElement("span");
        element.textContent = text_string;
        parent_div.appendChild(element);
        text_array.push(element);
    }
    parent.appendChild(parent_div);
    if (callback) {
        callback(parent_div, text_array);
    }
}
const box_1 = document.getElementById("box1");
create_text("CHECK OUT THE QUOTES BELOW!!!", box_1, (parent, text) => {
    let inc_wait = 0;
    for (const element of text) {
        inc_wait += 25;
        window.setTimeout(() => {
            console.log(element);
            element.style.display = "inline-block";
            element.style.position = "relative";
            element.style.animation = "popin 1s cubic-bezier(0.45, 0, 0.55, 1) 1 forwards, boxtext1 5s cubic-bezier(0.45, 0, 0.55, 1) infinite";
        }, inc_wait);
    }
});
// LIST
const quotes_div = document.getElementById("quotes");
create_text("      •  NAANANANANANA", quotes_div, (parent, text) => {
    let inc_wait = 0;
    for (const element of text) {
        element.style.userSelect = "none";
        inc_wait += 25;
        window.setTimeout(() => {
            console.log(element);
            element.style.display = "inline-block";
            element.style.position = "relative";
            element.style.animation = "popin 1s cubic-bezier(0.45, 0, 0.55, 1) 1 forwards";
        }, inc_wait);
    }
});
create_text("      •  NAANANANANANA", quotes_div, (parent, text) => {
    let inc_wait = 0;
    for (const element of text) {
        element.style.userSelect = "none";
        inc_wait += 25;
        window.setTimeout(() => {
            console.log(element);
            element.style.display = "inline-block";
            element.style.position = "relative";
            element.style.animation = "popin 1s cubic-bezier(0.45, 0, 0.55, 1) 1 forwards";
        }, inc_wait);
    }
});
create_text("      •  NAANANANANANA", quotes_div, (parent, text) => {
    let inc_wait = 0;
    for (const element of text) {
        element.style.userSelect = "none";
        inc_wait += 25;
        window.setTimeout(() => {
            console.log(element);
            element.style.display = "inline-block";
            element.style.position = "relative";
            element.style.animation = "popin 1s cubic-bezier(0.45, 0, 0.55, 1) 1 forwards";
        }, inc_wait);
    }
});
create_text("      •  NAANANANANANA", quotes_div, (parent, text) => {
    let inc_wait = 0;
    for (const element of text) {
        element.style.userSelect = "none";
        inc_wait += 25;
        window.setTimeout(() => {
            console.log(element);
            element.style.display = "inline-block";
            element.style.position = "relative";
            element.style.animation = "popin 1s cubic-bezier(0.45, 0, 0.55, 1) 1 forwards";
        }, inc_wait);
    }
});
console.log("??");
