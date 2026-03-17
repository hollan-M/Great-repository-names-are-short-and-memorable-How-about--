// super skibidi pizza!!

let text_id = document.getElementById("uselesslol");

let trail_body = document.getElementById("trail");

// Source - https://stackoverflow.com/a/28222246
// Posted by Adam Grant, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-06, License - CC BY-SA 4.0

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }
  
//

let words = [];
function oksigma(inc) {
    let copy = text_id.cloneNode(true);
    trail_body.appendChild(copy);
    copy.style.animation = "thefade 1s linear lalalalala 5s linear";
    copy.style.position = "relative";

    //table.insert(words, copy);
    words.push(copy);

    // let mod_inc = (inc * 0.1) % 100;
    // console.log(mod_inc);
    // copy.style.color = `hsl(${mod_inc} 100 50)`;

    // copy.style.color = "green";
}

let time_to_wait = 0;

for (let i = 0; i < 100; i++) {
    time_to_wait += 25;
    let counter = time_to_wait;
    window.setTimeout(()=>{oksigma(counter)}, time_to_wait);
}

let dt_a = Date.now();
let elapsed = 0;
let secondary_wait = 0;

setInterval(() => {
  dt = Date.now() - dt_a;
  dt_a = Date.now();

  elapsed += dt * 0.15;

  text_id.style.color = `hsl(${elapsed} 50 50)`;

  for (let index = 0; index < words.length; index++) {
    
    // secondary_wait += 25;
    // let counter = secondary_wait;
    // window.setTimeout(()=>{
      element = words[index];
      element.style.color = `hsl(${elapsed + index * 20} 50 50)`;
    // }, secondary_wait)
  }

  // for _, v in words do v.style.color = `hsl(${elapsed} 100 50)` end
}, 100);
