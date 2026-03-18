var body = document.getElementById("body");
function create_text(text, parent, callback) {
    var parent_div = document.createElement("div");
    var text_array = [];
    for (var _i = 0, text_1 = text; _i < text_1.length; _i++) {
        var text_string = text_1[_i];
        if (text_string == " ") {
            text_string = "\u00a0";
        }
        var element = document.createElement("span");
        element.textContent = text_string;
        parent_div.appendChild(element);
        text_array.push(element);
    }
    parent.appendChild(parent_div);
    if (callback) {
        callback(parent_div, text_array);
    }
}
var box_1 = document.getElementById("box1");
create_text("Wow! This is a MAGIC BOX!", box_1, function (parent, text) {
    var inc_wait = 0;
    var _loop_1 = function (element) {
        inc_wait += 25;
        window.setTimeout(function () {
            console.log(element);
            element.style.display = "inline-block";
            element.style.position = "relative";
            element.style.animation = "boxtext1 5s cubic-bezier(0.45, 0, 0.55, 1) infinite";
        }, inc_wait);
    };
    for (var _i = 0, text_2 = text; _i < text_2.length; _i++) {
        var element = text_2[_i];
        _loop_1(element);
    }
});
console.log("??");
