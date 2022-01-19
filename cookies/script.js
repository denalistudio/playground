function cookies(kind) {
    switch (kind) {
        case 'basic':
            var div = document.createElement('div');
            div.id = 'cookies';
            div.innerHTML = 'By continuing to use this website, you agree to our use of cookies. <button id="cookies-ok">OK</button>';
            // Style
            div.style.position = 'fixed';
            div.style.bottom = '40px';
            div.style.margin = 'auto';
            document.body.appendChild(div);
            console.log('cookies: The "basic" cookie button kind has been loaded.');
            break;
        default:
            console.log('cookies: The "kind" parameter is not defined correctly.');
    }
}