// For

var words = ["frutilla", "kiwi", "banana", "manzana", "pera"];

for (var i = 0; i < words.length; i++) {
    alert(words[i]);
}


for (var i = 0; i < words.length; i++) {
    var modifiedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    alert(modifiedWord);
}


var sentence = "";

for (var i = 0; i < words.length; i++) {
    sentence += words[i] + " ";
}

alert(sentence);


var numbers = [];

for (var i = 0; i < 10; i++) {
    numbers.push(i);
}

console.log(numbers);
