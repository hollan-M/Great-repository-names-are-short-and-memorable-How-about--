const body = document.getElementById("body")!;

function create_text(text: string, parent: HTMLElement, callback: (parent_div: HTMLDivElement, text_array: HTMLSpanElement[]) => void) {
    const parent_div = document.createElement("div");

    const text_array = [] as HTMLSpanElement[];

    for (let text_string of text) {
        if (text_string == " ") {text_string = "\u00a0"}
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

window.setTimeout(()=>{
    let quote_box = document.getElementById("quotes_container");
    quote_box.style.animation = "box_opener 2s cubic-bezier(0.45, 0, 0.55, 1) 1 forwards"
}, 1500)

// LOL I stole from my own website but thats ok 
// begin functions for the bg
function get_random_coords() {
    let in_width = window.innerWidth;
    let in_height = window.innerHeight;
    return {x: Math.random() * in_width, y: Math.random() * in_height}
}

function random_int(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} // this is stolen tbh but its used globally so ill keep it for now
const box_1 = document.getElementById("box1");
create_text("CHECK OUT THE QUOTES BELOW!!!", box_1 as HTMLDivElement, (parent: HTMLDivElement, text: HTMLSpanElement[])=>{
    let inc_wait = 0;
    for (const element of text) {
        let addition = random_int(25, 50);
        inc_wait += addition;
        window.setTimeout(()=>{
            element.style.display = "inline-block";
            element.style.position = "relative";
            element.style.animation = "popin 1s cubic-bezier(0.45, 0, 0.55, 1) 1 forwards, boxtext1 5s cubic-bezier(0.45, 0, 0.55, 1) infinite"
        }, inc_wait)
    }
});
window.setTimeout(()=>{

    
    // LIST
    const quotes_div = document.getElementById("quotes");
    create_text(`      •  "Ur the DSM-5 mental illness pokemon master" - Astrid`, quotes_div as HTMLDivElement, (parent: HTMLDivElement, text: HTMLSpanElement[])=>{
        let inc_wait = 0;
        for (const element of text) {
            element.style.userSelect = "none";
            let addition = random_int(25, 50);
            inc_wait += addition;
            window.setTimeout(()=>{
                element.style.display = "inline-block";
                element.style.position = "relative";
                element.style.animation = "popin 1s cubic-bezier(0.45, 0, 0.55, 1) 1 forwards"
            }, inc_wait)
        }
    });
    create_text(`      •  "Son im crine 😭" - Written on the board`, quotes_div as HTMLDivElement, (parent: HTMLDivElement, text: HTMLSpanElement[])=>{
        let inc_wait = 0;
        for (const element of text) {
            element.style.userSelect = "none";
            let addition = random_int(25, 50);
            inc_wait += addition;
            window.setTimeout(()=>{
                element.style.display = "inline-block";
                element.style.position = "relative";
                element.style.animation = "popin 1s cubic-bezier(0.45, 0, 0.55, 1) 1 forwards"
            }, inc_wait)
        }
    });
    create_text(`      •  "Catholic school should see me now." - Astrid`, quotes_div as HTMLDivElement, (parent: HTMLDivElement, text: HTMLSpanElement[])=>{
        let inc_wait = 0;
        for (const element of text) {
            element.style.userSelect = "none";
            let addition = random_int(25, 50);
            inc_wait += addition;
            window.setTimeout(()=>{
                element.style.display = "inline-block";
                element.style.position = "relative";
                element.style.animation = "popin 1s cubic-bezier(0.45, 0, 0.55, 1) 1 forwards"
            }, inc_wait)
        }
    });
    create_text(`      •  "Despite everything, you're still you." - Toby T. Fox`, quotes_div as HTMLDivElement, (parent: HTMLDivElement, text: HTMLSpanElement[])=>{
        let inc_wait = 0;
        for (const element of text) {
    
            element.style.userSelect = "none";
            let addition = random_int(25, 50);
            inc_wait += addition;
            window.setTimeout(()=>{
                element.style.display = "inline-block";
                element.style.position = "relative";
                element.style.animation = "popin 1s cubic-bezier(0.45, 0, 0.55, 1) 1 forwards"
            }, inc_wait)
        }
    });

}, 3500)


console.log("quote page init");