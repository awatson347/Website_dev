var accounts = [];

// Account Object
// balance
// username

// createAccount(account)
// push onto accounts array
// return account
function createAccount(account){
	accounts.push(account);
	return account;
}

// getAccount(username)
// find matching account using forEach
function getAccount(username){
	var matchedAccount;

	accounts.forEach(function(account){
		if (account.username=== username){
			matchedAccount=account;
		}
	});
	return matchedAccount;
}


//deposit(account, amount)
function deposit (account, amount){
	account.balance+=amount;
}

//withdraw(account, amount)
function withdraw (account, amount) {
	account.balance-=amount;
}

//getBalance(account)

function getBalance(account){
	return account.balance;
}

var alexsAccount = createAccount({
	username:'Alex',
	balance:70000

});

deposit(alexsAccount, 100);
console.log(getBalance(alexsAccount));

withdraw(alexsAccount, 130);
console.log(getBalance(alexsAccount));

var existingAccount = getAccount('Alex');
console.log(getBalance(alexsAccount));

var jensAccount=createAccount({
	username: 'jen001',
	balance: 1200
});

console.log(accounts);

var exitingJensAccount= getAccount('jen001');
console.log(exitingJensAccount);


