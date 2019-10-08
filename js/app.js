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

var Phinny = {
  shopLocation: 'Phinny Ridge',
  minHourlyCustomers: 5,
  maxHourlyCustomers: 20,
  avgCookiesPerCustomer: 10,
  shopHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  customerPerHour: [],
  hourTotals: function () {
    return getRandomIntArray(this.minHourlyCustomers,this.maxHourlyCustomers,this.shopHours.length);
  },

  totalCookiesForDay: function() {
    //cust # array
    this.customerPerHour = this.hourTotals();

    console.log('string',this.customerPerHour);
    //total cookies
    var totalCookies = this.customerPerHour[0];
    for(var x = 1; x < this.customerPerHour.length; x++) {
      totalCookies += (this.customerPerHour[x] * this.avgCookiesPerCustomer);
    }

    //Total cookies returned
    //Aggregate of all customers multiplied by averge per customer
    return totalCookies;
  },
  renderLocation: function() {
    var childElName = document.createElement('div');
    childElName.textContent = ` ${this.shopLocation} `;
    parentEl.appendChild(childElName);
  },
  renderTotal: function() {
    var childElTotal = document.createElement('div');
    childElTotal.textContent = `Total: ${this.totalCookiesForDay()} cookies`;
    parentEl.appendChild(childElTotal);
  },
  renderHours: function() {
    for(var i = 0; i < this.shopHours.length; i++) {
      var childElHours = document.createElement('li');
      childElHours.textContent = `${this.shopHours[i]}: ${this.customerPerHour[i] * this.avgCookiesPerCustomer}  cookies`;
      parentEl.appendChild(childElHours);
    }
  }
};
Phinny.renderLocation();
Phinny.renderTotal();
Phinny.renderHours();

//********Shop 2*************** */

var GreenWood = {
  shopLocation: 'Greenwood',
  minHourlyCustomers: 5,
  maxHourlyCustomers: 20,
  avgCookiesPerCustomer: 10,
  shopHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  customerPerHour: [],
  hourTotals: function () {
    return getRandomIntArray(this.minHourlyCustomers,this.maxHourlyCustomers,this.shopHours.length);
  },

  totalCookiesForDay: function() {
    //cust # array
    this.customerPerHour = this.hourTotals();

    // console.log('string',this.customerPerHour);
    //total cookies
    var totalCookies = this.customerPerHour[0];
    for(var x = 1; x < this.customerPerHour.length; x++) {
      totalCookies += (this.customerPerHour[x] * this.avgCookiesPerCustomer);
    }

    //Total cookies returned
    //Aggregate of all customers multiplied by averge per customer
    return totalCookies;
  },
  renderLocation: function() {
    var childElName = document.createElement('div');
    childElName.textContent = ` ${this.shopLocation} `;
    parentEl.appendChild(childElName);
  },
  renderTotal: function() {
    var childElTotal = document.createElement('div');
    childElTotal.textContent = `Total: ${this.totalCookiesForDay()} cookies`;
    parentEl.appendChild(childElTotal);
  },
  renderHours: function() {
    for(var i = 0; i < this.shopHours.length; i++) {
      var childElHours = document.createElement('li');
      childElHours.textContent = `${this.shopHours[i]}: ${this.customerPerHour[i] * this.avgCookiesPerCustomer}  cookies`;
      parentEl.appendChild(childElHours);
    }
  }
};
GreenWood.renderLocation();
GreenWood.renderTotal();
GreenWood.renderHours();

//********Shop 3*************** */

var Ballard = {
  shopLocation: 'Ballard',
  minHourlyCustomers: 5,
  maxHourlyCustomers: 20,
  avgCookiesPerCustomer: 10,
  shopHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  customerPerHour: [],
  hourTotals: function () {
    return getRandomIntArray(this.minHourlyCustomers,this.maxHourlyCustomers,this.shopHours.length);
  },

  totalCookiesForDay: function() {
    //cust # array
    this.customerPerHour = this.hourTotals();

    console.log('string',this.customerPerHour);
    //total cookies
    var totalCookies = this.customerPerHour[0];
    for(var x = 1; x < this.customerPerHour.length; x++) {
      totalCookies += (this.customerPerHour[x] * this.avgCookiesPerCustomer);
    }

    //Total cookies returned
    //Aggregate of all customers multiplied by averge per customer
    return totalCookies;
  },
  renderLocation: function() {
    var childElName = document.createElement('div');
    childElName.textContent = ` ${this.shopLocation} `;
    parentEl.appendChild(childElName);
  },
  renderTotal: function() {
    var childElTotal = document.createElement('div');
    childElTotal.textContent = `Total: ${this.totalCookiesForDay()} cookies`;
    parentEl.appendChild(childElTotal);
  },
  renderHours: function() {
    for(var i = 0; i < this.shopHours.length; i++) {
      var childElHours = document.createElement('li');
      childElHours.textContent = `${this.shopHours[i]}: ${this.customerPerHour[i] * this.avgCookiesPerCustomer}  cookies`;
      parentEl.appendChild(childElHours);
    }
  }
};
Ballard.renderLocation();
Ballard.renderTotal();
Ballard.renderHours();

//********Shop 4*************** */

var WestSeattle = {
  shopLocation: 'West Seattle',
  minHourlyCustomers: 5,
  maxHourlyCustomers: 20,
  avgCookiesPerCustomer: 10,
  shopHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  customerPerHour: [],
  hourTotals: function () {
    return getRandomIntArray(this.minHourlyCustomers,this.maxHourlyCustomers,this.shopHours.length);
  },

  totalCookiesForDay: function() {
    //cust # array
    this.customerPerHour = this.hourTotals();

    console.log('string',this.customerPerHour);
    //total cookies
    var totalCookies = this.customerPerHour[0];
    for(var x = 1; x < this.customerPerHour.length; x++) {
      totalCookies += (this.customerPerHour[x] * this.avgCookiesPerCustomer);
    }

    //Total cookies returned
    //Aggregate of all customers multiplied by averge per customer
    return totalCookies;
  },
  renderLocation: function() {
    var childElName = document.createElement('div');
    childElName.textContent = ` ${this.shopLocation} `;
    parentEl.appendChild(childElName);
  },
  renderTotal: function() {
    var childElTotal = document.createElement('div');
    childElTotal.textContent = `Total: ${this.totalCookiesForDay()} cookies`;
    parentEl.appendChild(childElTotal);
  },
  renderHours: function() {
    for(var i = 0; i < this.shopHours.length; i++) {
      var childElHours = document.createElement('li');
      childElHours.textContent = `${this.shopHours[i]}: ${this.customerPerHour[i] * this.avgCookiesPerCustomer}  cookies`;
      parentEl.appendChild(childElHours);
    }
  }
};
WestSeattle.renderLocation();
WestSeattle.renderTotal();
WestSeattle.renderHours();

//********Shop 5*************** */

var DownTown = {
  shopLocation: 'Downtown',
  minHourlyCustomers: 5,
  maxHourlyCustomers: 20,
  avgCookiesPerCustomer: 10,
  shopHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  customerPerHour: [],
  hourTotals: function () {
    return getRandomIntArray(this.minHourlyCustomers,this.maxHourlyCustomers,this.shopHours.length);
  },

  totalCookiesForDay: function() {
    //cust # array
    this.customerPerHour = this.hourTotals();

    console.log('string',this.customerPerHour);
    //total cookies
    var totalCookies = this.customerPerHour[0];
    for(var x = 1; x < this.customerPerHour.length; x++) {
      totalCookies += (this.customerPerHour[x] * this.avgCookiesPerCustomer);
    }

    //Total cookies returned
    //Aggregate of all customers multiplied by averge per customer
    return totalCookies;
  },
  renderLocation: function() {
    var childElName = document.createElement('div');
    childElName.textContent = ` ${this.shopLocation} `;
    parentEl.appendChild(childElName);
  },
  renderTotal: function() {
    var childElTotal = document.createElement('div');
    childElTotal.textContent = `Total: ${this.totalCookiesForDay()} cookies`;
    parentEl.appendChild(childElTotal);
  },
  renderHours: function() {
    for(var i = 0; i < this.shopHours.length; i++) {
      var childElHours = document.createElement('li');
      childElHours.textContent = `${this.shopHours[i]}: ${this.customerPerHour[i] * this.avgCookiesPerCustomer}  cookies`;
      parentEl.appendChild(childElHours);
    }
  }
};
DownTown.renderLocation();
DownTown.renderTotal();
DownTown.renderHours();
