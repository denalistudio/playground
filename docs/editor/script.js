function add_tags(tags)
{
    var container_contenteditable = document.getElementById("text");

    //Retrieve the selected text :
    var sel = window.getSelection();
    var text = container_contenteditable.innerHTML;
  container_contenteditable.innerHTML = text.replace(sel, '<b>'+sel+'</b>');
}