var hello = function *(name) {
	yield 'My name is ' + name;
	return 'Hello ' + name;
}

var gen = hello('zhang');

console.log(gen.next());
console.log(gen.next());