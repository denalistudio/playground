const date = new Date();

const invoice = {
  input: {
    number: document.querySelector("[data-input='number']"),
    due: document.querySelectorAll("#input > .due")[0]
  },
  output: {
    number: document.querySelectorAll("[data-invoice='number']")[0],
    heading: document.querySelectorAll("[data-invoice='heading']")[0],
    bank: document.querySelectorAll("[data-invoice='bank']")[0],
    variable: document.querySelectorAll("[data-invoice='variable']")[0],
    type: document.querySelectorAll("[data-invoice='type']")[0],
    due: document.querySelectorAll("[data-invoice='due']")[0],
    issue: document.querySelectorAll("[data-invoice='issue']")[0],
    tax: document.querySelectorAll("[data-invoice='tax']")[0],
    supplier: {
      name: document.querySelectorAll("[data-invoice='supplier-name']")[0],
      address1: document.querySelectorAll("[data-invoice='supplier-address1']")[0],
      address2: document.querySelectorAll("[data-invoice='supplier-address2']")[0],
      ico: document.querySelectorAll("[data-invoice='supplier-ico']")[0]
    },
    buyer: {
      name: document.querySelectorAll("[data-invoice='buyer-name']")[0],
      address1: document.querySelectorAll("[data-invoice='buyer-address1']")[0],
      address2: document.querySelectorAll("[data-invoice='buyer-address2']")[0],
      ico: document.querySelectorAll("[data-invoice='buyer-ico']")[0]
    }
  },
  make: (what, argument) => {
    switch (what) {
      case "number":
        let number = ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getFullYear()).slice(-2) + ("0000" + invoice.input.number.value).slice(-4);
        invoice.output.number.innerHTML = "Faktura" + " " + number;
        invoice.output.variable.innerHTML = number;
        break;
      case "due":
        invoice.output.due.innerHTML = invoice.input.due.value;
        break;
      case "type":
        switch (argument) {
          case "bank":
            document.querySelectorAll(".bank").forEach(el => {
              el.style.display = "block";
            });
            invoice.output.type.innerHTML = "bankovním převodem";
            break;
          case "cash":
            document.querySelectorAll(".bank").forEach(el => {
              el.style.display = "none";
            });
            invoice.output.type.innerHTML = "hotově";
            break;
        }
        break;
    }
  }
}

function init() {
  var today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  invoice.output.issue.innerHTML = today;
  invoice.output.tax.innerHTML = today;

  invoice.output.buyer.name.setAttribute("contenteditable", true);
  invoice.output.buyer.address1.setAttribute("contenteditable", true);
  invoice.output.buyer.address2.setAttribute("contenteditable", true);
  invoice.output.buyer.ico.setAttribute("contenteditable", true);
}

function make(what, argument) {
  switch (what) {
    case "number":
      let number = ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getFullYear()).slice(-2) + ("0000" + invoice.input.number.value).slice(-4);
      invoice.output.number.innerHTML = "Faktura" + " " + number;
      invoice.output.variable.innerHTML = number;
      break;
    case "due":
      invoice.output.due.innerHTML = invoice.input.due.value;
      break;
    case "type":
      switch (argument) {
        case "bank":
          document.querySelectorAll(".bank").forEach(el => {
            el.style.display = "block";
          });
          invoice.output.type.innerHTML = "bankovním převodem";
          break;
        case "cash":
          document.querySelectorAll(".bank").forEach(el => {
            el.style.display = "none";
          });
          invoice.output.type.innerHTML = "hotově";
          break;
      }
      break;
  }
}

document.addEventListener("DOMContentLoaded", init);

invoice.input.number.addEventListener("input", make("number"));

fetch('./info.json')
  .then(response => response.json())
  .then(data => {
    invoice.output.heading.innerHTML = data.heading;
    invoice.output.supplier.name.innerHTML = data.name;
    invoice.output.supplier.address1.innerHTML = data.address1;
    invoice.output.supplier.address2.innerHTML = data.address2;
    invoice.output.supplier.ico.innerHTML = data.ico;
    invoice.output.bank.innerHTML = data.bank;
  })
  .catch(error => console.error(error));