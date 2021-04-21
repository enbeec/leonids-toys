#!/usr/bin/env node

const toys = [
	{
		id: 1,
		name: "jacobs ladder",
		cost: 1.72,
		price: 4.99,
		weightOunce: 1.2,
		color: "green",
		isFun: true
	},
	{
		id: 2,
		name: "soldier",
		cost: 0.42,
		price: 1.50,
		weightOunce: 0.8,
		color: "pewter",
		isFun: false 
	},
	{
		id: 3,
		name: "racecar",
		cost: 2.10,
		price: 3.99,
		weightOunce: 2.0,
		color: "blue with racing stripes",
		isFun: true,
	}
]

function printToy(toy, isItFunTho) {
		console.log(`The ${toy.color} ${toy.name} costs $${toy.price} and our margin is $${marginOf(toy)}.`);
		if (isItFunTho) {
			if (toy.isFun) {
				console.log(`\t...and it's worth every penny!`);
			} else {
				console.log(`\t...too bad it isn't any fun to play with :/`);
			}
		}
}

function toyById(id) {
	for (const toy of toys) {
		if (toy.id === id) {
			return toy	
		}
	}
}

function marginOf(toy) {
	return (toy.price - toy.cost).toFixed(2);
}

function priceChange(toy, pricePercent) {
	const p = toy.price;
	toy.price = (p * pricePercent).toFixed(2);
	return toy;
}

// ====== EXEC ================
for (const toy of toys) {
	priceChange(toy, 1.05);
}

