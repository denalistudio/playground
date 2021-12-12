function format(command, value) {
    document.execCommand(command, false, value);
}

function count(target){
    var count = document.getElementById(target).innerHTML.split(' ').length;
    document.getElementById('counter').innerHTML = count;
}