// selecting dom elements
const body=document.querySelector('body')
const plusPeople= document.querySelector('.plus')
let perPersonTotal = document.getElementById("perPersonTotal");
const minusPeople = document.querySelector(".minus");
const peopleonScreen = document.getElementById('numberOfPeople');

let billInput = document.getElementById("billTotalInput");
let tipInput = document.getElementById('tipInput');

//functions

const calcBill = function () {
  const total = isNaN(billInput)|| isNaN(tipInput)? 0
  :(billInput + (billInput * tipInput) / 100) / peopleCount;

  perPersonTotal.textContent = `$${total.toFixed(2)}`;
};

const increasePeople=()=>{
    peopleCount++;
    peopleonScreen.textContent = peopleCount;
}

const decreasePeople= ()=>{
     peopleCount > 1 ? peopleCount-- : peopleCount;
     peopleonScreen.textContent = peopleCount;
}







// implementing people count
let peopleCount=1
plusPeople.onclick=()=> {increasePeople();calcBill()}
minusPeople.onclick=()=>{decreasePeople();calcBill()}



// calculating bill




billInput.addEventListener('input',function(){
    billInput=+this.value
    calcBill()
})

tipInput.addEventListener('input',function(){
    tipInput=+this.value
    calcBill()
})




























