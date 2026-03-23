var cobbersong = new Howl({
    src: [cobbers],
    autoplay: false,
    loop: true,
    volume: 10
})

let body = document.getElementById("main")!;

// on startup, do..
let SITE_STARTED = false;

// site-related bools
let main_div = document.createElement("div");
body.appendChild(main_div);

let box_div = document.createElement("div");
body.appendChild(box_div);

let quote_div: any = document.getElementById("quotes");

let drift_container = document.getElementById("drift_container")!;
let animDuration = 5;

// site-related functions

function create_text(text: string, parent: HTMLElement, callback: any) {
    let parent_div = document.createElement("div");

    let text_array = [] as HTMLSpanElement[];

    for (let text_string of text) {
        if (text_string == " ") {text_string = "\u00a0"}
        let element = document.createElement("a");
        element.textContent = text_string;
        parent_div.appendChild(element);
        text_array.push(element);
    }

    parent.appendChild(parent_div);

    if (callback) {
        callback(parent_div, text_array);
    }
}

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

function create_drift_element() {
    let start = get_random_coords();
    let end = get_random_coords();
    
    const created_drifter = document.createElement("p"); // element of drift
    // created_drifter.innerHTML = "▉"; /// sets character
    created_drifter.style.border = "10px solid black"
    created_drifter.style.borderRadius = "15px";
    created_drifter.classList.add("drifter"); // gives the drift element its respective class
    // set start and end coords
    created_drifter.style.setProperty("--start-x", `${start.x}px`);
    created_drifter.style.setProperty("--start-y", `${start.y}px`);
    created_drifter.style.setProperty("--end-x", `${end.x}px`);
    created_drifter.style.setProperty("--end-y", `${end.y}px`);
    created_drifter.style.setProperty("animation-duration", `${animDuration}s`);
    // 
    created_drifter.style.setProperty("font-size", random_int(5, 15) + "px");
    created_drifter.addEventListener("animationend", (element: any) => { // LIIITERALLY .target on the element RETURNS THE ELEMENT WHY CAN I NOT FUCKING REMOVE IT TYSM TS
        // console.log(element.target);
        element.target.remove(); // when animation ends, remove
    })
    
    drift_container.appendChild(created_drifter);
}

//

let trigger = document.getElementById("trigger")!;
trigger.style.display = "flex";
trigger.style.alignItems = "center";
trigger.style.position = "absolute";
trigger.style.transform = "translate(875px, 195px)";
trigger.style.border = "5px solid black";
trigger.style.borderRadius = "25px";
trigger.style.height = "75px";
trigger.style.width = "350px";
trigger.style.justifyContent = "center";
trigger.style.boxShadow = "black 0px 10px 15px";

trigger.addEventListener("click", (e) => {
    body.style.display = "unset";
    trigger.style.display = "none";
    body.style.opacity = "1";
    cobbersong.play();

    create_text("HI GUYS!! welcome to this trash site I put way too much effort into writing this mostly in typescript LOL", main_div, (parent: HTMLDivElement, text: HTMLAnchorElement[])=>{
        parent.style.position = "absolute";
        parent.style.transform = "translate(50px, 0)"
        parent.style.animationFillMode = "forwards";
        parent.style.textAlign = "center";
        parent.style.boxShadow = "black 0px 10px 15px";
        parent.parentElement.id = "header_div";
    
        for (let index = 0; index < text.length; index++) {
            let element: HTMLAnchorElement = text[index];
            element.style.fontSize = "50px";
            element.style.opacity = "0";
            element.style.transform = "translate(45%, 0)"
            element.style.animationFillMode = "forward";
            element.style.display = "inline-block";
        }
        
        let inc_wait = 0;
        
        for (let index = 0; index < text.length; index++) {
            inc_wait += 85;
            let element: HTMLAnchorElement = text[index];
            window.setTimeout(()=>{
                element.style.animationFillMode = "forward";
                element.style.animation = "popin 1s cubic-bezier(0.45, 0, 0.55, 1) 1 forwards, float2 5s cubic-bezier(0.45, 0, 0.55, 1) infinite"
            }, inc_wait)
        }

    })
    
    create_text("QUOTES!! Rene descartes or something like that", quote_div, (parent: HTMLDivElement, text: HTMLAnchorElement[])=>{ // returns in the callbcak, I KNOW I can use `return`s but I like how I set this up, bite me
        let div_parent = parent.parentElement!;
        
        parent.style.display = "flex";
        parent.style.alignItems = "center";
        parent.style.position = "absolute";
        parent.style.transform = "translate(875px, 195px)";
        parent.style.border = "5px solid black";
        parent.style.borderRadius = "25px";
        parent.style.height = "75px";
        parent.style.width = "350px";
        parent.style.justifyContent = "center";
        parent.style.boxShadow = "black 0px 10px 15px";
        div_parent.id = "quotes_parent_div";
        parent.id = "quotes_div";
    
        
    
        let inc_wait = 0;
    
        for (let index = 0; index < text.length; index++) {
            inc_wait += 25;
            let element: HTMLAnchorElement = text[index]!;
            element.style.boxShadow = "black 0px 10px 15px";
            element.style.userSelect = "none";
            window.setTimeout(()=>{
                element.style.position = "relative";
                element.style.animation = "float2 5s cubic-bezier(0.45, 0, 0.55, 1) infinite";
            }, inc_wait)
        }
        // handle clicks
        parent.addEventListener("click", (e) => {
            console.log(window.location)
            if (window.location.href == "file:///Users/hollanm9/Documents/GitHub/Great-repository-names-are-short-and-memorable-How-about--/index.html") {
                console.log("LOCAL CLICK, REDIRECTING...");
                window.open("file:///Users/hollanm9/Documents/GitHub/Great-repository-names-are-short-and-memorable-How-about--/boxes/boxes.html", "_blank")
            } else {
                console.log("SERVER CLICK")
            }
        })
    }) 
    
    create_text("BOXES!! Check this swag out oh my goodness!!", box_div, (parent: HTMLDivElement, text: HTMLAnchorElement[])=>{ 
        let div_parent = parent.parentElement!;
        
        parent.style.display = "flex";
        parent.style.alignItems = "center";
        parent.style.position = "absolute";
        parent.style.transform = "translate(875px, 295px)";
        parent.style.border = "5px solid black";
        parent.style.borderRadius = "25px";
        parent.style.height = "75px";
        parent.style.width = "350px";
        parent.style.justifyContent = "center";
        parent.style.boxShadow = "black 0px 10px 15px";
        div_parent.id = "boxes_parent_div";
        parent.id = "boxes_div";
    
        let inc_wait = 0;
    
        for (let index = 0; index < text.length; index++) {
            inc_wait += 25;
            let element: HTMLAnchorElement = text[index]!;
            element.style.boxShadow = "black 0px 10px 15px";
            element.style.userSelect = "none";
            window.setTimeout(()=>{
                element.style.position = "relative";
                element.style.animation = "float2 3s cubic-bezier(0.83, 0, 0.17, 1) infinite";
            }, inc_wait)
        }
        // handle clicks
        parent.addEventListener("click", (e) => {
            console.log(window.location)
            if (window.location.href == "file:///Users/hollanm9/Documents/GitHub/Great-repository-names-are-short-and-memorable-How-about--/index.html") {
                console.log("LOCAL CLICK, REDIRECTING...");
                window.open("file:///Users/hollanm9/Documents/GitHub/Great-repository-names-are-short-and-memorable-How-about--/boxes/boxes.html", "_blank")
            } else {
                console.log("SERVER CLICK")
            }
        })
    })

    setInterval(create_drift_element, 100); // will run this function once every X milliseconds, meaning it'll create a new drifter every X milliseconds

    console.log("init ye wow")
})