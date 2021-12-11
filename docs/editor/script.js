function format(command, value) {
    document.execCommand(command, false, value);
}

function get_text(el) {
    ret = "";
    var length = el.childNodes.length;
    for (var i = 0; i < length; i++) {
        var node = el.childNodes[i];
        if (node.nodeType != 8) {
            ret += node.nodeType != 1 ? node.nodeValue : get_text(node);
        }
    }
    var ret
}

function countWords() {
    var words = get_text(document.getElementById('text'));
    var count = words.split(/\s+/).length;
    alert(count);
}
