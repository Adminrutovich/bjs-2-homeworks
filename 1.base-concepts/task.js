"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  if(d < 0) {
    return arr;
  }
  else if (d > 0) {
    arr[0] = (-b + Math.sqrt(d))/(2*a);
    arr[1] = (-b - Math.sqrt(d))/(2*a);
  } 
  else if (d === 0) {
    arr[0] = -b/(2*a);
  }
  return arr;
}
solveEquation(2, 6, 12);
solveEquation(9, 100, 1);
solveEquation(54, 13, -2);



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount)) {
    return false;
  }
  if(countMonths < 0 || amount < 0) {
    return false;
  } 
  let P = percent/100/12;
  let S = amount - contribution;
  let monthlyPayment = S * (P + (P / (((1 + P)**countMonths) - 1)));
  let totalPayment = monthlyPayment * countMonths;
  return Number(totalPayment.toFixed(2));
}
calculateTotalMortgage(10, 0, 50000, 12);
calculateTotalMortgage(10, 1000, 50000, 12);
calculateTotalMortgage(10, 0, 20000, 24);
calculateTotalMortgage(10, 1000, 20000, 24);
calculateTotalMortgage(10, 20000, 20000, 24);
calculateTotalMortgage(10, 0, 10000, 36);
calculateTotalMortgage(15, 0, 10000, 36);