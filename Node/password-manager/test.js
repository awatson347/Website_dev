console.log('Starting Password App');

var storage = require('node-persist');
storage.initSync();

function createAccount (account) {
	var accounts = storage.getItemSync('accounts');
	if ( typeof account === 'undefined') {
		accounts = [];
	}
	accounts.push(account);
	storage.setItemSync('accounts', accounts);
	return account;
}
function getAccount (accountName) {
	var accounts = storage.getItemSync ('accounts');
	var matchedAccount;
	accounts.forEach(function (account) {
		if (account.name === accountName) {
			matchedAccount = account;
		}
	});
		return matchedAccount;
}
//createAccount ({
//	name: 'Facebook',
//	username: 'awatson347@aol.com',
//	password: 'Password123'
//});
var facebookAccount = getAccount('Facebook');
console.log(facebookAccount);

