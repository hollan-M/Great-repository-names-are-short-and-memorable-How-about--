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

function oksigma() {
    let copy = text_id.cloneNode(true);
    trail_body.appendChild(copy);
    copy.style.animation = "thefade 1s linear lalalalala 5s linear";
    copy.style.position = "relative";
    
    let offset = getOffset(copy);

    // memory leak fix, but bigs the site, so..not sorry! :3

    // window.setTimeout(function() {
    //     trail_body.removeChild(copy);
    //     console.log("eaa?")
    // }, 5000)
}

setInterval(oksigma, 25);
