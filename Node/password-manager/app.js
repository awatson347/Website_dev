console.log('Starting password manager');

var storage = require('node-persist');
storage.initSync();

var argv = require('yargs')
	.command('create', 'Create a new account', function(yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Account name (eg: Twitter, Facebook)',
				type:'string'
			},
			username:{
				demand:true,
				alias:'u',
				description:'Account username or email',
				type:'string'
			},
			password:{
				demand:true,
				alias:'p',
				description:'Account password',
				type:'string'
			}
		}).help("help");
	})
	.command('get', 'get an existing account', function(yargs){
		yargs.options({
			name:{
				demand: true,
				alias:'n',
				description:'Account name (e.g.Twitter, Facebook)',
				type:'string'
			}
		}).help('help');
	})
	.help('help')
	.argv;
	var command=argv._[0];

// create
//     --name
//     --username
//     --password

// get
//     --name

// account.name Facebook
// account.username User12!
// account.password Password123!

function createAccount (account) {
var accounts = storage.getItemSync('accounts');
	
	if (typeof accounts === 'undefined') {
		accounts = [];
	}

	accounts.push(account);
	storage.setItemSync('accounts', accounts);

	return account;
}

function getAccount (accountName) {
var accounts = storage.getItemSync('accounts');
var matchedAccount;
accounts.forEach(function (account) {
	if (account.name === accountName) {
		matchedAccount = account;
	}
});
	return matchedAccount;
}

//createAccount({
//name:  'Facebook',
//username: 'somemail@gmail.com',
//password: 'Password123'
//});
var facebookAccount = getAccount('Facebook');
console.log(facebookAccount);



