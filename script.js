// functii simple

function printDigits() {
	for (let i = 0; i <= 9; i++) {
		console.log(`Digit: `, i);
	}
}

printDigits();
printDigits();
printDigits();

// functii cu parametrii

function printSum(a, b) {
	let sum = a + b;
	console.log(`Suma dintre ${a} si ${b} este ${sum}`);
}

printSum(3, 5);

// un numar se afla intr un Array

function arrayHasElement(arrayToCkeck, Element) {
	let found = false;
	for (const el of arrayToCkeck) {
		if (el === Element) {
			console.log(`Array ${arrayToCkeck} has element ${Element}`);
			found = true;
			break;
		}
		if (found) {
			console.log(`Array ${arrayToCkeck} has element ${Element}`);
		} else {
			console.log(`Array ${arrayToCkeck} does not have element ${Element}`);
		}
	}
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 10, 12, 21];
const valueToCheck1 = 10;
const valueToCheck2 = 30;

arrayHasElement(array1, valueToCheck1);
arrayHasElement(array2, valueToCheck2);

// alta metoda
arrayHasElement([`ala`, `bala`, `portocala`], `ala`);

// functie cu parametri si return

function removeEvenNumbers(arrayToModify) {
	const newArray = [];

	for (const num of arrayToModify) {
		if (num % 2 > 0) {
			newArray.push(num);
		}
	}
	return newArray;
}

const array1Modified = removeEvenNumbers(array1);
console.log(`Modified array1 is: ${array1Modified}`);

const array2Modified = removeEvenNumbers(array2);
console.log(`Modified array2 is: ${array2Modified}`);

const shoppingBasket = [];
const stockProducts = [
	{
		name: `Hat`,
		price: 22.99,
		stock: 12,
	},
	{
		name: `Tricou`,
		price: 30.99,
		stock: 40,
	},
];

function moveFromStockToBasket(productName) {
	for (const product of stockProducts) {
		if (product.name === productName) {
			shoppingBasket.push({ name: product.name, quantity: 1 });
			product.stock -= 1;
		}
	}
}
console.log(`Current stock:`, stockProducts);
console.log(`Shopping basket:`, shoppingBasket);

moveFromStockToBasket(`Hat`);
console.log(`Current stock:`, stockProducts);
console.log(`Shopping basket:`, shoppingBasket);

// functii anonime

const printHello = function () {
	console.log(`Hello`);
};

printHello();

function MapArray(arrayToMap, mappingFunction) {
	const newArray = [];
	for (const element of arrayToMap) {
		let mappingFunctionResult = mappingFunction(element);
		newArray.push(mappingFunctionResult);
	}
	return newArray;
}

const arrayToMap = [1, 2, 3];
const doubledArray = MapArray(arrayToMap, function (el) {
	return el * 2;
});

console.log(`arrayToMap: ${arrayToMap}`);
console.log(`doubledArray: ${doubledArray}`);
