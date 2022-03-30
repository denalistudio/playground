const date = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
}

const dom = {
    head: document.getElementsByTagName('head')[0],
}

function load(id, url) {
    var xmlhttp;
    if (window.XMLHttpRequest) 
    {
        xmlhttp = new XMLHttpRequest();
    } 
    else 
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() 
    {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) 
        {
           if (xmlhttp.status == 200) {
               document.getElementById(id).innerHTML = xmlhttp.responseText;
               var allScripts = document.getElementById(id).getElementsByTagName('script');
               for (var n = 0; n < allScripts .length; n++)
               {
                   eval(allScripts [n].innerHTML)
               }
           }
           else {
               console.error('Error loading ' + url + ': ' + xmlhttp.statusText);
           }
        }
    }

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

fetch('./comma.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Set the document title
        document.title = data.name;
        // Link the stylesheet
        var stylesheet = document.createElement('link');
        stylesheet.setAttribute('rel', 'stylesheet');
        stylesheet.href = data.files.style;
        dom.head.appendChild(stylesheet);
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
        // If true, set noindex property
        if (data.noindex == true) {
            var noindex = document.createElement('meta');
            noindex.setAttribute('name', 'robots');
            noindex.content = 'noindex';
            document.getElementsByTagName('head')[0].appendChild(noindex);
        }
        document.getElementsByTagName('footer')[0].innerHTML = ('<p>©' + ' ' + date.year + ' ' + data.name + '</p>');;
    })

function makeEditable() {
    var editable = document.querySelectorAll('h1, h2, h3, p');
    for (var i = 0; i < editable.length; i++) {
        editable[i].contentEditable = 'true';
    }
}