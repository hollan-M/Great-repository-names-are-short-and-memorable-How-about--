var body = document.getElementById("body");
function create_text(text, parent, callback) {
    var parent_div = document.createElement("div");
    var text_array = [];
    for (var _i = 0, text_1 = text; _i < text_1.length; _i++) {
        var text_string = text_1[_i];
        if (text_string == " ") {
            text_string = "\u00a0";
        }
        var element = document.createElement("a");
        element.textContent = text_string;
        parent_div.appendChild(element);
        text_array.push(element);
    }
    parent.appendChild(parent_div);
    if (callback) {
        callback(parent_div, text_array);
    }
}
var quote_div = document.createElement("div");
body.appendChild(quote_div);
create_text("QUOTES!! Rene descartes or something like that", quote_div, function (parent, text) {
    parent.style.display = "flex";
    parent.style.alignItems = "center";
    parent.style.position = "absolute";
    parent.style.left = "5%";
    var inc_wait = 0;
    var _loop_1 = function (index) {
        inc_wait += 25;
        var element = text[index];
        window.setTimeout(function () {
            element.style.position = "relative";
            element.style.animation = "wowie 5s cubic-bezier(0.45, 0, 0.55, 1) infinite";
            console.log(text[index]);
        }, inc_wait);
    };
    for (var index = 0; index < text.length; index++) {
        _loop_1(index);
    }
});
var box_div = document.createElement("div");
body.appendChild(box_div);
create_text("BOXES!! Check this swag out oh my goodness!!", box_div, function (parent, text) {
    parent.style.display = "flex";
    parent.style.alignItems = "center";
    parent.style.position = "absolute";
    parent.style.left = "5%";
    parent.style.top = "25%";
    var inc_wait = 0;
    var _loop_2 = function (index) {
        inc_wait += 25;
        var element = text[index];
        element.href = "https://hollan-m.github.io/Great-repository-names-are-short-and-memorable-How-about--/boxes/boxes.html";
        window.setTimeout(function () {
            element.style.position = "relative";
            element.style.animation = "wowie 5s cubic-bezier(0.45, 0, 0.55, 1) infinite";
            console.log(text[index]);
        }, inc_wait);
    };
    for (var index = 0; index < text.length; index++) {
        _loop_2(index);
    }
});
console.log("init ye");
