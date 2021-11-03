function editorDownload(textToWrite, fileNameToSaveAs) {
  var textFileAsBlob = new Blob([textToWrite], { type: "text/plain" });
  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  if (window.webkitURL != null) { // Chrome
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  } else { // Firefox
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }

  downloadLink.click();
}

//

async function editorInsertFormatting(txtarea, text) {
  var selectStart = txtarea.selectionStart; // "Select" the selection
  var selectEnd = txtarea.selectionEnd;
  var scrollPos = txtarea.scrollTop;
  var caretPos = txtarea.selectionStart;

  var front = txtarea.value.substring(0, caretPos);
  var back = txtarea.value.substring(
    txtarea.selectionEnd,
    txtarea.value.length
  );
  var middle = txtarea.value.substring(caretPos, txtarea.selectionEnd);
  txtarea.value = front + text + middle + text + back;
  if (selectStart !== selectEnd) {
    txtarea.selectionStart = selectStart + text.length;
    txtarea.selectionEnd = selectEnd + text.length;
  } else {
    txtarea.selectionStart = selectStart + text.length;
    txtarea.selectionEnd = txtarea.selectionStart;
  }
  txtarea.focus();
  txtarea.scrollTop = scrollPos;
}

function parseMarkdown(markdownText) {
	const htmlText = markdownText
    .replace(/^###### (.*$)/gim, '<h6>$1</h6>')
    .replace(/^##### (.*$)/gim, '<h5>$1</h5>')
    .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
		.replace(/^### (.*$)/gim, '<h3>$1</h3>')
		.replace(/^## (.*$)/gim, '<h2>$1</h2>')
		.replace(/^# (.*$)/gim, '<h1>$1</h1>')
		.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
		.replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
		.replace(/\*(.*)\*/gim, '<i>$1</i>')
		.replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
		.replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
		.replace(/\n$/gim, '<br>')
	return htmlText.trim()
}

function liveParser(){
  const text = document.getElementById("text").value;
  var htmltext = parseMarkdown(text);
  document.getElementById('parsed').innerHTML = htmltext;
}

function liveParserOutput(){
  const text = document.getElementById("text").value;
  var htmltext = parseMarkdown(text);
  console.log('liveParser output: ' + htmltext)
}

function devtoolsOpen(){
  document.getElementById('devtools').style.display = 'block';
}

function devtoolsClose(){
  document.getElementById('devtools').style.display = 'none';
}

function printTestText(){
  document.getElementById('text').innerText = "# Test text"
}