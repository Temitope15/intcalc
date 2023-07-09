const principal = document.getElementById("principal");
const rate = document.getElementById("rate");
const time = document.getElementById("time");
const result = document.getElementById("para");
const inputs = document.querySelector(".inputs");

const compoundPrincipal = document.getElementById("compound-principal");
const compoundRate = document.getElementById("compound-rate");
const compoundTime = document.getElementById("compound-time");

const compoundInterestParent = document.getElementById("compound-interest");
const years = (year)=> {
  if(year ===1){ return `${year} year`
} else {
    return `${year} years`
}
}
//handles
const simpleIntrestParent = document.getElementById("simple-interest");
const introText = document.getElementById("introText");
const h2 = document.getElementById("h2");
const introPara = document.getElementById("p");

function showSimpleInterest() {
  simpleIntrestParent.style.display = "flex";
  introText.style.display = "none";
  h2.innerText = "Simple Interest Calculator";
  introPara.innerText =
    "Input your principal, rate and time taken to get the simple interest and amount paid.";
}
function showCompoundInterest() {
  compoundInterestParent.style.display = "flex";
  introText.style.display = "none";
  h2.innerText = "Compound Interest Calculator";
  introPara.innerText =
    "Input your principal, rate and time taken to get the Amount paid on compound interest.";
}
function simpleIntrest() {
  const p = parseInt(principal.value);
  const r = parseInt(rate.value);
  const t = parseInt(time.value);
  const refresh = document.getElementById("refresh");
  const i = (p * r * t) / 100;
  if (i) {
    result.innerText = `The Simple interest on  #${p} at ${r}% for ${years(t)}  is #${i}.
      
      The amount is #${p + i}
      `;
    introPara.innerText = "Solution";
    result.style.backgroundColor = "green";
    result.style.color = "white";
    inputs.style.display = "none";
    refresh.style.display = "block";
  }
}

function compoundInterest() {
  const P = parseInt(compoundPrincipal.value);
  const R = parseInt(compoundRate.value);
  const T = parseInt(compoundTime.value);
  const refresh = document.getElementById("refresh");

  const A = P * (1 + R / 100) ** T;
  if (A) {
    result.innerText = `The Amount on #${P} at ${R}% for ${years(T)} compound interest is #${Math.floor(
      A
    )}`;
    result.style.backgroundColor = "green";
    result.style.color = "white";
    compoundInterestParent.style.display = "none";
    refresh.style.display = "block";
    introPara.innerText = "Solution";
  }
}
