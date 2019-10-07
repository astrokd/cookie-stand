'use strict';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function getRandomIntArray(max,count) {
  var numArray =[0,1,2];
  for (var i = 0;i < count;i++) {
    numArray[i] = getRandomInt(max);
  }
  return numArray;
}

// DOM
var parentEl = document.getElementById('parentElement');

// var childEl = document.getElementById('childElement');

var CafeShop = {
  shopName: 'Cafe Lucas',
  shopHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  hourTotals : getRandomIntArray(40,14),
  totalCookiesForDay: function() {
    var totalCookies = this.hourTotals[0];
    for(var x = 1; x < this.hourTotals.length; x++) {
      totalCookies += this.hourTotals[x];
      return totalCookies;
    }
  },
  renderName: function() {
    var childElName = document.createElement('div');
    childElName.textContent = `Shop Name: ${this.shopName}`;
    parentEl.appendChild(childElName);
  },
  renderTotal: function() {
    var childElTotal = document.createElement('div');
    childElTotal.textContent = `Total Cookies For Day: ${this.totalCookiesForDay()}`;
    parentEl.appendChild(childElTotal);
  },
  renderHours: function() {
    for(var i = 0; i < this.shopHours.length; i++) {
      var childElHours = document.createElement('li');
      childElHours.textContent = `Shop Hours: ${this.shopHours[i]} ~ Total Customers: ${this.hourTotals[i]}`;
      parentEl.appendChild(childElHours);
    }
  }
};
CafeShop.renderName();
CafeShop.renderHours();
CafeShop.renderTotal();
