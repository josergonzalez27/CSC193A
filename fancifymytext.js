function makeBigger(){
    document.getElementById("textInput").style.fontSize = "24pt";  
}

function updateStyle() {
    var textArea = document.getElementById("textInput");
    var fancyRadio = document.getElementById("fancy");

    if (fancyRadio.checked) {
        alert("FancyShmancy!");
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        alert("BoringBetty!");
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooText() {
    var textArea = document.getElementById("textInput");

    var text = textArea.value.toUpperCase();

    var sentences = text.split(".");

    for (var i = 0; i < sentences.length; i++) {
        var sentence = sentences[i].trim();
        if (sentence.length > 0) {
            var words = sentence.split(" ");
            var lastIndex = words.length - 1;
            words[lastIndex] = words[lastIndex] + "-MOO";
            sentences[i] = words.join(" ");
        }
    }

    textArea.value = sentences.join(". ");
}
