var person = {
	name: 'Alex',
	age:'47'
};
var personJSON = JSON.stringify(person);

console.log(personJSON);
console.log(typeof personJSON);

var personObject = JSON.parse(personJSON);
console.log(personObject.name);
console.log(typeof personObject);

console.log('CHALLENGE AREA');
var animal =  '{"name": "Atrain"}';
var animalObject = JSON.parse(animal);
animalObject.age = 1;
animal = JSON.stringify(animalObject);
console.log(animal);





