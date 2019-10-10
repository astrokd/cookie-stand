'use strict';
// Global Variable
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var allStores = [];
Shop.allStoresTotal = 0;

var tableBody = document.getElementById('tableElement');

//****** Render Header Row
var renderHeaderRow = function() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.id = 'header';
  trEl.appendChild(thEl);

  for(var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = hours[i];
    trEl.appendChild(tdEl);
  }

  var tdElem = document.createElement('td');
  tdElem.textContent = 'Total';
  trEl.appendChild(tdElem);
  tableBody.appendChild(trEl);
};
renderHeaderRow();

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
  allStores.push(this);
  this.cookPerHourTotals();
  this.totCookPerDay();
  this.renderShopRow();
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

//******** Render Shop Row */
Shop.prototype.renderShopRow = function() {
  //create elements
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.shopLocation;
  trEl.appendChild(tdEl);

  //loop over the length of hourlycookiestotal
  for(var i =0; i<this.cookiesPerHour.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }
  //show total by accessing totalCookies
  var tdElem = document.createElement('td');
  tdElem.textContent = this.totalCookiesPerDay;
  trEl.appendChild(tdElem);
  tableBody.appendChild(trEl);

};

//******* Render Footer Row */
var renderFooterRow = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.id = 'footer';
  tdEl.textContent = 'Hourly Totals: ';
  trEl.appendChild(tdEl);
  console.log(hours.length);

  for( var i = 0;i < hours.length; i++) {
    var storesHourlyTotals = 0;
    var td = document.createElement('td');

    for ( var j = 0 ; j < allStores.length ; j++) {
      storesHourlyTotals += allStores[j].cookiesPerHour[i];
    }
    td.textContent = storesHourlyTotals;
    trEl.appendChild(td);
    Shop.allStoresTotal += storesHourlyTotals;
  }

  var tdElem = document.createElement('td');
  tdElem.textContent = Shop.allStoresTotal;
  trEl.appendChild(tdElem);
  tableBody.appendChild(trEl);
};

//********Shop instances********* */
new Shop('Phinny Ridge', 5, 20, 7.8);
new Shop('Greenwood', 6, 25, 8.5);
new Shop('Ballard', 8, 22, 9.1);
new Shop('West Seattle', 6, 20, 8.8);
new Shop('Downtown', 10, 35, 6.3);

var userForm = document.getElementById('user-form');
userForm.addEventListener('submit', handleSubmit);

function sayHello() {
  console.log('hello from sayHello');
}

function handleSubmit(event) {
  event.preventDefault();
  var location = event.target.inputLocation.value;
  var min = event.target.inputMinCustPerHr.value;
  var max = event.target.inputMaxCustPerHr.value;
  var avg = event.target.inputAvgCookPerCust.value;
  sayHello();
  //var footer = document.getElementById('footer');
  var footer = document.getElementById('footer');
  footer.parentNode.remove(footer);
  new Shop(location,min,max,avg);
  renderFooterRow();

  if (isNaN(min) || isNaN(max) || isNaN(avg)) {
    alert('please enter a number');
    event.target.inputMinCustPerHr.value = null;
    event.target.inputMaxCustPerHr.value = null;
    event.target.inputAvgCookPerCust.value = null;
  }

}

renderFooterRow();
