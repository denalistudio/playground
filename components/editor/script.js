function editorDownload(textToWrite, fileNameToSaveAs) {
  var textFileAsBlob = new Blob([textToWrite], { type: "text/plain" });
  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  if (window.webkitURL != null) {
    // Chrome allows the link to be clicked
    // without actually adding it to the DOM.
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  } else {
    // Firefox requires the link to be added to the DOM
    // before it can be clicked.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }

  downloadLink.click();
}

async function editorInsertFormatting(txtarea, text) {
    var selectStart = txtarea.selectionStart
    var selectEnd = txtarea.selectionEnd
    var scrollPos = txtarea.scrollTop;
    var caretPos = txtarea.selectionStart;

    var front = (txtarea.value).substring(0, caretPos);
    var back = (txtarea.value).substring(txtarea.selectionEnd, txtarea.value.length);
    var middle = (txtarea.value).substring(caretPos, txtarea.selectionEnd);
    txtarea.value = front + text + middle + text + back;
    if (selectStart !== selectEnd) {
        txtarea.selectionStart = selectStart + text.length
        txtarea.selectionEnd = selectEnd + text.length
    } else {
        txtarea.selectionStart = selectStart + text.length
        txtarea.selectionEnd = txtarea.selectionStart
    }
    txtarea.focus();
    txtarea.scrollTop = scrollPos;
}