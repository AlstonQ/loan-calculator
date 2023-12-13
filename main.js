/**
 * @license
 * Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
 * https://creativecommons.org/licenses/by-nc-nd/4.0/
 * Made by Adam Burucs in 2023.
 *
 * Please see LICENSE file in the repo root folder.
 */

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
});

const amount_range = document.querySelector("#amount-range");
const amount_number = document.querySelector("#amount-number");

const term_number = document.querySelector("#term-number");
const term_range = document.querySelector("#term-range");

const interest_number = document.querySelector("#interest-number");
const interest_range = document.querySelector("#interest-range");

const result = document.querySelector(".result");
const result_interest = document.querySelector(".result-interest");
const result_total = document.querySelector(".result-total");

amount_range.addEventListener("change", (e) => {
  amount_number.value = e.target.value;
});

amount_number.addEventListener("change", (e) => {
  amount_range.value = e.target.value;
});

term_range.addEventListener("change", (e) => {
  term_number.value = e.target.value;
});

term_number.addEventListener("change", (e) => {
  term_range.value = e.target.value;
});

interest_range.addEventListener("change", (e) => {
  interest_number.value = e.target.value;
});

interest_number.addEventListener("change", (e) => {
  interest_range.value = e.target.value;
});

/*

formula

interest = (amount * (rate * 0.01))/months;
total = ((amount/months) + interest);

*/

function calculateInterest(amount, rate, term) {
  if (!amount || !rate || !term) {
    console.error("Wrong amount, term or interest.");
    return false;
  }

  if (amount > 0 && term > 0) {
    return (amount * (rate * 0.01)) / (term * 12);
  }

  console.error("Amount and term should be greater than zero.");
  return false;
}

function calculateTotalLoan(amount, term, interest) {
  if (!amount || !term || !interest) {
    console.error("Wrong amount or term.");
    return false;
  }

  if (term > 0) {
    return amount / (term * 12) + interest;
  }

  console.error("Term should be greater than zero.");
  return false;
}

document.querySelector("#calculate").addEventListener("click", () => {
  let interest = calculateInterest(
    amount_number.value,
    interest_number.value,
    term_number.value
  );

  let total = calculateTotalLoan(
    amount_number.value,
    term_number.value,
    interest
  );

  if (interest >= 0 && total >= 0) {
    result.style.display = "block";
    result_interest.textContent =
      "$" + Number.parseFloat(interest).toFixed(2).toString();
    result_total.textContent =
      "$" + Number.parseFloat(total).toFixed(2).toString();
  }
});

document.querySelector(".button-reset").addEventListener("click", () => {
  result.style.display = "none";
  result_interest.textContent = "";
  result_total.textContent = "";
});
