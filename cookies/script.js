function cookies(kind) {
    switch (kind) {
        case 'basic':
            var div = document.createElement('div');
            div.id = 'cookies';
            div.innerHTML = 'By continuing to use this website, you agree to our use of cookies. <button id="cookies-ok">OK</button>';
            div.className = 'border pad';
            div.style.position = 'fixed';
            document.body.appendChild(div);
            break;
        default:
            console.log('cookies: The "kind" parameter is not defined correctly.');
    }
}