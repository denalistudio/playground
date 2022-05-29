"use strict";
const editor = {
    format: (type) => {
        var sel = window.getSelection();
        var range = sel.getRangeAt(0);
        var range0 = range.cloneRange();
        range.collapse(true);
        document.execCommand('insertText', false, type);
        sel.removeAllRanges();
        sel.addRange(range0);
        range0.collapse(false);
        document.execCommand('insertText', false, type);
    },
    syntax: (text) => {
        var html = text
            .replace(/\*\*(.*)\*\*/gim, "<b>$1</b>") // bold
            .replace(/\*(.*)\*/gim, "<i>$1</i>") // italic
            .replace(/\_(.*)\_/gim, "<u>$1</u>") // underline
            .replace(/\-(.*)\-/gim, "<s>$1</s>") // strikethrough
            .replace(/^# (.*$)/gim, "<h1>$1</h1>") // h1
            .replace(/^## (.*$)/gim, "<h2>$1</h2>") // h2
            .replace(/^### (.*$)/gim, "<h3>$1</h3>") // h3
            .replace(/^#### (.*$)/gim, "<h4>$1</h4>") // h4
            .replace(/^##### (.*$)/gim, "<h5>$1</h5>") // h5
            .replace(/^###### (.*$)/gim, "<h6>$1</h6>") // h6
            .replace(/^\> (.*$)/gim, "<blockquote>$1</blockquote>") // blockquote
            .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />") // image
            .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>") // link
            .replace(/\n$/gim, "<br>"); // linebreak
        return html.trim();
    },
    output: () => {
        var input = document.getElementById("editor").innerHTML;
        document.getElementById("text").innerHTML = editor.syntax(input);
    },
    save: () => {
        var textFileAsBlob = new Blob([document.getElementById("editor").innerHTML], { type: "text/plain" });
        var downloadLink = document.createElement("a");
        downloadLink.download = 'download.md';
        downloadLink.innerHTML = "Download File";
        if (window.webkitURL != null) {
            // Chrome
            downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
        }
        else {
            // Firefox
            downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
            downloadLink.onclick = destroyClickedElement;
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
        }
        downloadLink.click();
    }
};
onkeydown = function (e) {
    if (e.ctrlKey) {
        switch (e.keyCode) {
            case 75:
                e.preventDefault();
                search.show();
                break;
            case 66:
                e.preventDefault();
                editor.format('**');
                break;
            case 73:
                e.preventDefault();
                editor.format('*');
                break;
        }
    }
};
search.input.addEventListener('keyup', search.filter);
spotlight.element.addEventListener('click', search.show);
document.getElementById('bold').addEventListener('click', () => editor.format('**'));
const properties = [
    'direction',
    'boxSizing',
    'width',
    'height',
    'overflowX',
    'overflowY',
    'borderTopWidth',
    'borderRightWidth',
    'borderBottomWidth',
    'borderLeftWidth',
    'borderStyle',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'fontStyle',
    'fontVariant',
    'fontWeight',
    'fontStretch',
    'fontSize',
    'fontSizeAdjust',
    'lineHeight',
    'fontFamily',
    'textAlign',
    'textTransform',
    'textIndent',
    'textDecoration',
    'letterSpacing',
    'wordSpacing',
    'tabSize',
    'MozTabSize',
];
const isFirefox = typeof window !== 'undefined' && window['mozInnerScreenX'] != null;
/**
 * @param {HTMLTextAreaElement} element
 * @param {number} position
 */
function getCaretCoordinates(element, position) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const style = div.style;
    const computed = getComputedStyle(element);
    style.whiteSpace = 'pre-wrap';
    style.wordWrap = 'break-word';
    style.position = 'absolute';
    style.visibility = 'hidden';
    properties.forEach(prop => {
        style[prop] = computed[prop];
    });
    if (isFirefox) {
        if (element.scrollHeight > parseInt(computed.height))
            style.overflowY = 'scroll';
    }
    else {
        style.overflow = 'hidden';
    }
    div.textContent = element.value.substring(0, position);
    const span = document.createElement('span');
    span.textContent = element.value.substring(position) || '.';
    div.appendChild(span);
    const coordinates = {
        top: span.offsetTop + parseInt(computed['borderTopWidth']),
        left: span.offsetLeft + parseInt(computed['borderLeftWidth']),
        // height: parseInt(computed['lineHeight'])
        height: span.offsetHeight
    };
    div.remove();
    return coordinates;
}
class Editor {
    constructor(element) {
        this.element = document.getElementById('editor');
        this.element.addEventListener('keyup', () => editor.output());
        this.element.addEventListener('keydown', (e) => {
            if (e.keyCode === 9) {
                e.preventDefault();
                const { selectionStart, selectionEnd } = this.element;
                const value = this.element.value;
                this.element.value = `${value.substring(0, selectionStart)}\t${value.substring(selectionEnd)}`;
                this.element.selectionStart = this.element.selectionEnd = selectionStart + 1;
            }
        });
    }
    format(tag) {
        const { selectionStart, selectionEnd } = this.element;
        const value = this.element.value;
        this.element.value = `${value.substring(0, selectionStart)}${tag}${value.substring(selectionStart, selectionEnd)}${tag}${value.substring(selectionEnd)}`;
        this.element.selectionStart = this.element.selectionEnd = selectionStart + tag.length;
    }
}
