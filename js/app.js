'use strict';

function getRandomIntArray(min,max,count) {
  var numArray =[0];
  for (var i = 0;i < count;i++) {
    min = Math.ceil(min);
    max = Math.floor(max);
    numArray[i] = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  //   console.log(numArray);
  return numArray;
}
// console.log(getRandomIntArray(10,30,15));

var parentEl = document.getElementById('parentElement');

//********Shop 1*************** */
//Phinny
var Phinny = {
  shopLocation: 'Phinny Ridge',
  minHourlyCustomers: 5,
  maxHourlyCustomers: 20,
  avgCookiesPerCustomer: 10,
  shopHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  customerPerHour: [],
  cookiesPerHour: [],
  totalCookiesPerDay: 0,
  custPerHourTotals: function() {
    return getRandomIntArray(this.minHourlyCustomers,this.maxHourlyCustomers,this.shopHours.length);
  },
  cookPerHourTotals: function() {
    this.customerPerHour = this.custPerHourTotals();
    for (var y = 0;y < this.customerPerHour.length;y++) {
      this.cookiesPerHour.push(this.customerPerHour[y] * this.avgCookiesPerCustomer);
    }
    return this.cookiesPerHour;
  },
  totCookPerDay: function() {
    for (var x = 0;x < this.cookiesPerHour.length;x++) {
      this.totalCookiesPerDay += this.cookiesPerHour[x];
    }
    return this.totalCookiesPerDay;
  },
  render: function() {
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

  },
};
Phinny.cookPerHourTotals();
Phinny.totCookPerDay();
Phinny.render();

//********Shop 2*************** */
//GreenWood
var GreenWood = {
  shopLocation: 'GreenWood',
  minHourlyCustomers: 5,
  maxHourlyCustomers: 20,
  avgCookiesPerCustomer: 10,
  shopHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  customerPerHour: [],
  cookiesPerHour: [],
  totalCookiesPerDay: 0,
  custPerHourTotals: function() {
    return getRandomIntArray(this.minHourlyCustomers,this.maxHourlyCustomers,this.shopHours.length);
  },
  cookPerHourTotals: function() {
    this.customerPerHour = this.custPerHourTotals();
    for (var y = 0;y < this.customerPerHour.length;y++) {
      this.cookiesPerHour.push(this.customerPerHour[y] * this.avgCookiesPerCustomer);
    }
    return this.cookiesPerHour;
  },
  totCookPerDay: function() {
    for (var x = 0;x < this.cookiesPerHour.length;x++) {
      this.totalCookiesPerDay += this.cookiesPerHour[x];
    }
    return this.totalCookiesPerDay;
  },
  render: function() {
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

  },
};
GreenWood.cookPerHourTotals();
GreenWood.totCookPerDay();
GreenWood.render();

//********Shop 3*************** */
//Ballard
var Ballard = {
  shopLocation: 'Ballard',
  minHourlyCustomers: 5,
  maxHourlyCustomers: 20,
  avgCookiesPerCustomer: 10,
  shopHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  customerPerHour: [],
  cookiesPerHour: [],
  totalCookiesPerDay: 0,
  custPerHourTotals: function() {
    return getRandomIntArray(this.minHourlyCustomers,this.maxHourlyCustomers,this.shopHours.length);
  },
  cookPerHourTotals: function() {
    this.customerPerHour = this.custPerHourTotals();
    for (var y = 0;y < this.customerPerHour.length;y++) {
      this.cookiesPerHour.push(this.customerPerHour[y] * this.avgCookiesPerCustomer);
    }
    return this.cookiesPerHour;
  },
  totCookPerDay: function() {
    for (var x = 0;x < this.cookiesPerHour.length;x++) {
      this.totalCookiesPerDay += this.cookiesPerHour[x];
    }
    return this.totalCookiesPerDay;
  },
  render: function() {
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

  },
};
Ballard.cookPerHourTotals();
Ballard.totCookPerDay();
Ballard.render();

//********Shop 4*************** */
//WestSeattle
var WestSeattle = {
  shopLocation: 'West Seattle',
  minHourlyCustomers: 5,
  maxHourlyCustomers: 20,
  avgCookiesPerCustomer: 10,
  shopHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  customerPerHour: [],
  cookiesPerHour: [],
  totalCookiesPerDay: 0,
  custPerHourTotals: function() {
    return getRandomIntArray(this.minHourlyCustomers,this.maxHourlyCustomers,this.shopHours.length);
  },
  cookPerHourTotals: function() {
    this.customerPerHour = this.custPerHourTotals();
    for (var y = 0;y < this.customerPerHour.length;y++) {
      this.cookiesPerHour.push(this.customerPerHour[y] * this.avgCookiesPerCustomer);
    }
    return this.cookiesPerHour;
  },
  totCookPerDay: function() {
    for (var x = 0;x < this.cookiesPerHour.length;x++) {
      this.totalCookiesPerDay += this.cookiesPerHour[x];
    }
    return this.totalCookiesPerDay;
  },
  render: function() {
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

  },
};
WestSeattle.cookPerHourTotals();
WestSeattle.totCookPerDay();
WestSeattle.render();

//********Shop 5*************** */
//DownTown
var DownTown = {
  shopLocation: 'DownTown',
  minHourlyCustomers: 5,
  maxHourlyCustomers: 20,
  avgCookiesPerCustomer: 10,
  shopHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  customerPerHour: [],
  cookiesPerHour: [],
  totalCookiesPerDay: 0,
  custPerHourTotals: function() {
    return getRandomIntArray(this.minHourlyCustomers,this.maxHourlyCustomers,this.shopHours.length);
  },
  cookPerHourTotals: function() {
    this.customerPerHour = this.custPerHourTotals();
    for (var y = 0;y < this.customerPerHour.length;y++) {
      this.cookiesPerHour.push(this.customerPerHour[y] * this.avgCookiesPerCustomer);
    }
    return this.cookiesPerHour;
  },
  totCookPerDay: function() {
    for (var x = 0;x < this.cookiesPerHour.length;x++) {
      this.totalCookiesPerDay += this.cookiesPerHour[x];
    }
    return this.totalCookiesPerDay;
  },
  render: function() {
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

  },
};
DownTown.cookPerHourTotals();
DownTown.totCookPerDay();
DownTown.render();
