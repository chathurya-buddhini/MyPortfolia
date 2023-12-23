let home = document.querySelector('#home');
let cusbtn = document.querySelector('#cusbtn');
let itbtn = document.querySelector('#itbtn');
let odbtn = document.querySelector('#odbtn');
let oddbtn = document.querySelector('#oddbtn');

let cussec = document.querySelector('#cussec');
let itsec = document.querySelector('#itsec');
let odsec = document.querySelector('#odsec');
let oddsec = document.querySelector('#oddsec');
let dessec = document.querySelector('#dessec');

cusbtn.addEventListener("click",function(){
  cussec.style.display = 'flex';
  dessec.style.display = 'none';
  itsec.style.display = 'none';
  odsec.style.display = 'none';
  oddsec.style.display = 'none';
});

itbtn.addEventListener("click",function(){
  cussec.style.display = 'none';
  dessec.style.display = 'none';
  itsec.style.display = 'flex';
  odsec.style.display = 'none';
  oddsec.style.display = 'none';
});

odbtn.addEventListener("click",function(){
  cussec.style.display = 'none';
  dessec.style.display = 'none';
  itsec.style.display = 'none';
  odsec.style.display = 'flex';
  oddsec.style.display = 'none';
});

oddbtn.addEventListener("click",function(){
  cussec.style.display = 'none';
  dessec.style.display = 'none';
  itsec.style.display = 'none';
  odsec.style.display = 'none';
  oddsec.style.display = 'flex';
});

home.addEventListener("click",function(){
  cussec.style.display = 'none';
  dessec.style.display = 'flex';
  itsec.style.display = 'none';
  odsec.style.display = 'none';
  oddsec.style.display = 'none';
});

let customer={
id:"",
name:"",
address:"",
tp:""
}

let item={
code:"",
description:"",
qtyOnHand:0,
unitPrice:0
}

let order = {
oid:"",
date:"",
customerID:"",
orderDetails:[]
}

let orderDetail = {
oid: "",
date: "",
customerID: "",
orderDetails: [/*{oid: this.oid, code: "", qty: 0, unitPrice: 0}*/]
}