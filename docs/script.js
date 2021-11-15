function frame(url) {
    document.getElementById('frame').src = url;
}

// define a handler
function doc_keyUp(e) {

    // this would test for whichever key is 40 (down arrow) and the ctrl key at the same time
    if (e.altKey && e.keyCode == 49) {
        // call your function to do the thing
        frame('./editor/index.html');
    }

}
// register the handler 
document.addEventListener('keyup', doc_keyUp, false);