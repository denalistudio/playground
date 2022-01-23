fetch('./comma.json')
    .then(response => response.json())
    .then(data => {
        // Metadata and links
        // --------------------------------------------------
        // Set the document title
        document.title = data.name;
        // Link the stylesheet
        var stylesheet = document.createElement('link');
        stylesheet.setAttribute('rel', 'stylesheet');
        stylesheet.href = data.files.style;
        document.getElementsByTagName('head')[0].appendChild(stylesheet);
        // Set the document description
        var description = document.createElement('meta');
        description.setAttribute('name', 'description');
        description.content = data.description;
        document.getElementsByTagName('head')[0].appendChild(description);
        // Set the document author
        var author = document.createElement('meta');
        author.setAttribute('name', 'author');
        author.content = data.author;
        document.getElementsByTagName('head')[0].appendChild(author);
        // Set the document keywords
        var keywords = document.createElement('meta');
        keywords.setAttribute('name', 'keywords');
        keywords.content = data.keywords;
        document.getElementsByTagName('head')[0].appendChild(keywords);
        // Set the theme color
        var themecolor = document.createElement('meta');
        themecolor.setAttribute('name', 'theme-color');
        themecolor.content = data.color;
        document.getElementsByTagName('head')[0].appendChild(themecolor);
    })

function makeEditable() {
    var editable = document.querySelectorAll('h1, h2, h3, p');
    for (var i = 0; i < editable.length; i++) {
        editable[i].contentEditable = 'true';
    }
}