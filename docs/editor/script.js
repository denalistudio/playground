function editorLoad() {
  var settings = { "showDevTools": false, "name": "jakubklapka", "showHelp" : false};
  if (settings.showDevTools == true) {
    document.getElementById('developer').style.display = 'inline';
  }
  if (settings.showHelp == true) {
    document.getElementById('helpme').style.display = 'inline';
  }
}

function editorParseMarkdown(markdownText) {
  const htmlText = markdownText
    .replace(/\*\*(.*)\*\*/gim, "<b>$1</b>") // bold
    .replace(/\*(.*)\*/gim, "<i>$1</i>") // italic
    .replace(/\_(.*)\_/gim, "<u>$1</u>") // underline
    .replace(/\~\~(.*)\~\~/gim, "<s>$1</s>") // strikethrough
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
  return htmlText.trim();
}

function editorLiveParser() {
  const text = document.getElementById("text").value;
  var htmltext = editorParseMarkdown(text);
  document.getElementById("parsed").innerHTML = htmltext;
}

function editorInsertFormatting(txtarea, text) {
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
  editorLiveParser();
}

function editorDownload(textToWrite) {
  var textFileAsBlob = new Blob([textToWrite], { type: "text/plain" });
  var downloadLink = document.createElement("a");
  downloadLink.download = 'download.md';
  downloadLink.innerHTML = "Download File";
  if (window.webkitURL != null) {
    // Chrome
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  } else {
    // Firefox
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }

  downloadLink.click();
}

function editorDevtoolsOpen() {
  document.getElementById("devtools").style.display = "block";
}

function editorDevtoolsClose() {
  document.getElementById("devtools").style.display = "none";
}

function editorDevtoolsConsoleOutput() {
  const text = document.getElementById("text").value;
  var htmltext = editorParseMarkdown(text);
  console.log("liveParser output: " + htmltext);
}

function editorDevtoolsTestText() {
  let input = document.getElementById("text");

  // load default.txt into input box
  try {
    let fileToLoad = "default.md";
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", fileToLoad, false);
    xmlhttp.send();
    input.innerHTML = xmlhttp.responseText;
  } catch (DOMException) {
    input.innerHTML =
      "editorDevtoolsTestText: Error loading file - maybe related to filepath?";
  }
  editorLiveParser();
}

function doc_keyUp(e) {
  if (e.ctrlKey && e.keyCode == 66) {
    editorInsertFormatting(text, "**");
  }
  else if (e.ctrlKey && e.keyCode == 73) {
    editorInsertFormatting(text, "*");
  }
}

onkeydown = function (e) {
  if (e.ctrlKey && e.keyCode == 85) {
    e.preventDefault();
    editorDownload(text.value);
  }
}

document.addEventListener("keyup", doc_keyUp, false);

function clickload() {
  document.getElementById('my_file').click();
  editorLoadFile();
}

function editorLoadFile() {
  var file = document.getElementById('my_file').files[0];
  var reader = new FileReader();
  reader.onload = function (e) {
    document.getElementById('text').value = e.target.result;
  };
  reader.readAsText(file);
}