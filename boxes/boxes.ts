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

const box_1 = document.getElementById("box1");
create_text("Wow! This is a MAGIC BOX!", box_1 as HTMLDivElement, (parent: HTMLDivElement, text: HTMLSpanElement[])=>{
    let inc_wait = 0;
    for (const element of text) {
        inc_wait += 25;
        window.setTimeout(()=>{
            console.log(element);
            element.style.display = "inline-block";
            element.style.position = "relative";
            element.style.animation = "boxtext1 5s cubic-bezier(0.45, 0, 0.55, 1) infinite"
        }, inc_wait)
    }
});

console.log("??")