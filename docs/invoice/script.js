function invoiceWrite(variable, input) {
  document.getElementById(variable).innerHTML =
    document.getElementById(input).value;
}

function invoiceNumber() {
  var a = new Date();
  var month = ("0" + (a.getMonth() + 1)).slice(-2);
  var year = ("0" + a.getFullYear()).slice(-2);
  console.log(month + year);
  var myNumber = document.getElementById('number-input').value;
  var formattedNumber = ("0000" + myNumber).slice(-4);
    var invoiceNumber = month + year + formattedNumber;
  document.getElementById('number-variable').innerHTML = invoiceNumber
  document.getElementById('bank-variable').innerHTML = invoiceNumber
}

function printDiv() {
  var divContents = document.getElementById("paper").innerHTML;
  var a = window.open("", "", "height=500, width=500");
  a.document.write("<html>");
  a.document.write("<body>");
  a.document.write(divContents);
  a.document.write("</body></html>");
  a.document.close();
  a.print();
}
