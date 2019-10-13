'use strict';
// Global Variable
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var allStores = [];
Shop.allStoresTotal = 0;

var tableBody = document.getElementById('tableElement');

//****** Render Header Row
var renderHeaderRow = function() {
  var trEl = document.createElement('tr');
  addElement('th','Location',trEl);

  for(var i = 0; i < hours.length; i++) {
    addElement('th',hours[i],trEl);
  }

  addElement('th','Total',trEl);
  // Render row to table
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

function addElement(childElType, childContent, parentEl) {
  var childElement = document.createElement(childElType);
  childElement.textContent = childContent;
  parentEl.appendChild(childElement);
  return childElement;
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
  //create location cell
  var trEl = document.createElement('tr');
  addElement('td', this.shopLocation,trEl);

  //loop over the length of hourlycookiestotal
  for(var i =0; i<this.cookiesPerHour.length; i++) {
    addElement('td',this.cookiesPerHour[i],trEl);
  }
  //show total by accessing totalCookies
  addElement('td',this.totalCookiesPerDay,trEl);
  // Render row to table
  tableBody.appendChild(trEl);
};

//******* Render Footer Row */
var renderFooterRow = function() {
  var trEl = document.createElement('tr');
  var tdEl = addElement('td','Hourly Totals',trEl);
  tdEl.id = 'footer';
  //increment through each hour
  for( var i = 0;i < hours.length; i++) {
    var storesHourlyTotals = 0;
    for ( var j = 0 ; j < allStores.length ; j++) {
      storesHourlyTotals += allStores[j].cookiesPerHour[i];
    }
    addElement('td',storesHourlyTotals,trEl);
    Shop.allStoresTotal += storesHourlyTotals;
  }
  //assign last cell to allStoresTotal value
  var tdElem = document.createElement('td');
  tdElem.textContent = Shop.allStoresTotal;
  trEl.appendChild(tdElem);
  // Render row to table
  tableBody.appendChild(trEl);
};

//********Shop instances********* */
new Shop('Phinny Ridge', 3, 10, 2.8);
new Shop('Greenwood', 6, 12, 2.5);
new Shop('Ballard', 5, 10, 2.1);
new Shop('West Seattle', 4, 9, 1.8);
new Shop('Downtown', 10, 35, 4.3);

var userForm = document.getElementById('user-form');
userForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var location = event.target.inputLocation.value;
  var min = null;
  var max = null;
  min = event.target.inputMinCustPerHr.value;
  max = event.target.inputMaxCustPerHr.value;
  var avg = event.target.inputAvgCookPerCust.value;
  //Write input to table

  if (max < min) {
    console.log(`min = ${min} : max = ${max}`);
    event.target.inputMinCustPerHr.value = null;
    event.target.inputMaxCustPerHr.value = null;
    return alert('Maximum Customers Per Hour should be greater the Minimum');
  }

  if (!location && !min && !max && !avg) {
    return alert('please enter values');
  } else {
    var footer = document.getElementById('footer');
    footer.parentNode.remove(footer);
    new Shop(location,min,max,avg);
    renderFooterRow();
  }
}

renderFooterRow();
