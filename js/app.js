'use strict';

// Global Variable
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var tableBody = document.getElementById('tableElement');

var renderHeader = function() {
  for (var i = 0;i<hours.length;i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    tableBody.appendChild(thEl);
  }
};
renderHeader();

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

//Get random number of customer function
Shop.prototype.custPerHourTotals = function() {
  return getRandomIntArray(this.minHourlyCustomers,this.maxHourlyCustomers,hours.length);
};

//Get cookies sold per hour
Shop.prototype.cookPerHourTotals = function() {
  this.customerPerHour = this.custPerHourTotals();
  for (var i = 0;i < this.customerPerHour.length;i++) {
    this.cookiesPerHour.push(Math.ceil(this.customerPerHour[i] * this.avgCookiesPerCustomer));
  }
  return this.cookiesPerHour;
};

//Get total cookies sold
Shop.prototype.totCookPerDay = function() {
  for (var x = 0;x < this.cookiesPerHour.length;x++) {
    this.totalCookiesPerDay += this.cookiesPerHour[x];
  }
  return this.totalCookiesPerDay;
};

//Render location name, cookies per hour and total cookies
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
var Phinny = new Shop('Phinny Ridge', 5, 20, 7.8);

//********Shop 2******GreenWood********* */
var GreenWood = new Shop('Greenwood', 6, 25, 8.5);

//********Shop 3******Ballard********* */
var Ballard = new Shop('Ballard', 8, 22, 9.1);

//********Shop 4*******WestSeattle******** */
var WestSeattle = new Shop('West Seattle', 6, 20, 8.8);

//********Shop 5*******DownTown******** */
var DownTown = new Shop('Downtown', 10, 35, 6.3);

Phinny.render();
GreenWood.render();
Ballard.render();
WestSeattle.render();
DownTown.render();

