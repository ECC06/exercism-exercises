// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./freelancer-rates.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Get those rates calculated!

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  const dailyRate = ratePerHour * 8;
  const totalBudget = Math.floor(budget / dailyRate);
  return totalBudget;
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */

// e.g priceWithMonthlyDiscount(16, 70, 0.42);
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const ratePerDay = ratePerHour * 8; // 89 * 8 => 712

  const workingMonths = Math.floor(numDays/22); // Math.floor(230/22) => 10 
  const costForWorkingMonths = ratePerDay * 22 * workingMonths; // 712 * 22 * 10 => 156,640
  const discountedMonthlyRate = costForWorkingMonths - (costForWorkingMonths * discount); // 42% discount on 156,640 => 90851.2 (rounded up)

  const remainingDays = numDays % 22; // 230 % 22 => 10
  const rateForRemainingDays = remainingDays * ratePerDay; // 10 * 712 => 7120

  const finalProjectCost = Math.ceil(discountedMonthlyRate + rateForRemainingDays); //90851.2 + 7120 => 97971.2

  return Math.ceil(finalProjectCost); 
}



