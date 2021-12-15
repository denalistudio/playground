function format(type) {
    var sel = window.getSelection();
    var range = sel.getRangeAt(0);

    var range0 = range.cloneRange();

    range.collapse(true);
    document.execCommand('insertText', false, type);

    sel.removeAllRanges();
    sel.addRange(range0);
    range0.collapse(false);
    document.execCommand('insertText', false, type);
}

function count(target) {
    var count = document.getElementById(target).innerHTML.split(' ').length;
    document.getElementById('counter').innerHTML = count;
}

function table() {
    const people = [{
        firstName: 'George',
        hobby: 'Playing football'
    }];

    console.table(people)
    console.table(people, ['hobby'])
}

function editorLoad() {
    fetch('settings.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.showDevTools == true) {
                document.getElementById('developer').style.display = 'inline';
            }
            if (data.showHelp == true) {
                document.getElementById('helpme').style.display = 'inline';
            }
        })
}

function doc_keyUp(e) {
    if (e.ctrlKey && e.keyCode == 66) {
        format('**');
    }
    else if (e.ctrlKey && e.keyCode == 73) {
        format('*');
    }
}

document.addEventListener("keyup", doc_keyUp, false);