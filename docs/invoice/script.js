function invoiceWrite(variable, input) {
  document.getElementById(variable).innerHTML =
    document.getElementById(input).value;
}

function invoiceNumber() {
  var a = new Date();
  var month = ("0" + (a.getMonth() + 1)).slice(-2);
  var year = ("0" + a.getFullYear()).slice(-2);
  var myNumber = document.getElementById('number-input').value;
  var formattedNumber = ("0000" + myNumber).slice(-4);
    var invoiceNumber = month + year + formattedNumber;
  document.getElementById('number-variable').innerHTML = invoiceNumber
  document.getElementById('bank-variable').innerHTML = invoiceNumber
}

function invoiceDate() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    document.getElementById('date1-variable').innerHTML = date
    document.getElementById('date2-variable').innerHTML = date
}

function printDiv() {
  var divContents = document.getElementById("paper").innerHTML;
  var a = window.open("", "", "height=700, width=1000");
  a.document.write("<html>");
  a.document.write("<title>Invoice print</title>");
  a.document.write("<body>");
  a.document.write(divContents);
  a.document.write("</body></html>");
  a.document.close();
  a.print();
}
