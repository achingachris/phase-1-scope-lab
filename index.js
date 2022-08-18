// Write your solution in this file!

// Declared global scope variable
var customerName = 'bob';

// Function that accesses that global customerName variable, and uppercases it.
function upperCaseCustomerName() {
	customerName = customerName.toUpperCase();
}

// Function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
	bestCustomer = 'not bob';
}

// Function called overwriteBestCustomer() that changes that bestCustomer global variable declared in setBestCustomer()
function overwriteBestCustomer(newBestCustomer) {
	bestCustomer = newBestCustomer;
}

// Declare a constant in global scope
const leastFavoriteCustomer = 'Thanos';

// Function that attempts to change a constant
function changeLeastFavoriteCustomer() {
	leastFavoriteCustomer = 'Madocho';   
}
