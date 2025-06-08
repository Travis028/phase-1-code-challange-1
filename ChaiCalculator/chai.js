function calculateChaiIngredients(numberofcups) {
    const water = numberofcups * 600; // in ml
    const milk = numberofcups * 150; // in ml
    const teaLeaves = numberofcups * 3; // in teaspoons
    const sugar = numberofcups * 6; // in teaspoons
  
    console.log(`To make ${numberofcups} cups of chai, you need:`);
    console.log(`${water} ml of water`);
    console.log(`${milk} ml of milk`);
    console.log(`${teaLeaves} teaspoons of tea leaves`);
    console.log(`${sugar} teaspoons of sugar`);
    console.log("Enjoy your chai bora!");
}
        const input = prompt("Karibu! How many cups of Chai Bora would you like to make?:");
        const numberOfCups = parseInt(input, 10);
        calculateChaiIngredients(numberOfCups);