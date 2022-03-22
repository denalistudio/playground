function font(font) {
    switch (font) {
        case 'Inspiration':
            var link = "https://fonts.googleapis.com/css2?family=Inspiration&display=swap";
            break;
        case 'Roboto':
            var link = "https://fonts.googleapis.com/css2?family=Inspiration&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap";
            break;
    }
    var write = document.createElement('link');
    write.setAttribute('href', link);
    write.setAttribute('rel', 'stylesheet');
    document.getElementsByTagName('head')[0].appendChild(write);
}
