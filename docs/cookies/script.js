var modal = document.getElementById('modal');
var manageCookies = document.getElementById('manage-cookies')
var closeButton = document.getElementsByClassName('close')[0];

manageCookies.onclick = function() {
    modal.style.display = 'flex';
}

closeButton.onclick = function() {
    modal.style.display = 'none';
}