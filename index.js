

const pricePerGram = 700 / 1000; // 700 rupees per kg, so price per gram
const input = prompt('1kg chicken is 700 rupees. How much do you want to spend? (e.g., "100 rupees", "350 rupees")');

let rupees;
if (input.endsWith('rupees')) {
  rupees = parseFloat(input);
}

if (!isNaN(rupees)) {
  const grams = rupees / pricePerGram;
  document.write(`${rupees} rupees is equivalent to ${grams.toFixed(2)} grams`);
} else {
  document.write('Invalid input');
}



