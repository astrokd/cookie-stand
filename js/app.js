'use strict';

// Global Variable
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

// Helper Function
function getRandomIntArray(min,max,count) {
  var numArray =[0];
  for (var i = 0;i < count;i++) {
    min = Math.ceil(min);
    max = Math.floor(max);
    numArray[i] = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return numArray;
}

var parentEl = document.getElementById('parentElement');

//**** Constructor Function *****/
function Shop(shopLocation, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer) {
  this.shopLocation = shopLocation;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.shopHours = hours;
  this.customerPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookiesPerDay = 0;
}

//**** Prototype functions ****/
Shop.prototype.custPerHourTotals = function() {
  return getRandomIntArray(this.minHourlyCustomers,this.maxHourlyCustomers,hours.length);
};

Shop.prototype.cookPerHourTotals = function() {
  this.customerPerHour = this.custPerHourTotals();
  for (var i = 0;i < this.customerPerHour.length;i++) {
    this.cookiesPerHour.push(Math.ceil(this.customerPerHour[i] * this.avgCookiesPerCustomer));
  }
  return this.cookiesPerHour;
};

Shop.prototype.totCookPerDay = function() {
  for (var x = 0;x < this.cookiesPerHour.length;x++) {
    this.totalCookiesPerDay += this.cookiesPerHour[x];
  }
  return this.totalCookiesPerDay;
};

Shop.prototype.render = function() {
  //call cookie hours and totals
  this.cookPerHourTotals();
  this.totCookPerDay();
  //render location
  var childElName = document.createElement('div');
  childElName.textContent = ` ${this.shopLocation} `;
  parentEl.appendChild(childElName);
  //render hour and cookies for hour
  for(var i = 0;i < this.shopHours.length;i++) {
    var childElHours = document.createElement('li');
    childElHours.textContent = `${this.shopHours[i]}: ${this.cookiesPerHour[i]} cookies`;
    parentEl.appendChild(childElHours);
  }
  // render total cookies
  var childElTotal = document.createElement('div');
  childElTotal.textContent = `Total: ${this.totalCookiesPerDay} cookies`;
  parentEl.appendChild(childElTotal);
};

//********Shop 1******Phinny********* */
var Phinny = new Shop('Phinny Ridge', 5, 20, 8.8);
Phinny.render();

//********Shop 2*************** */
//GreenWood

//********Shop 3*************** */
//Ballard

//********Shop 4*************** */
//WestSeattle

//********Shop 5*************** */
//DownTown

