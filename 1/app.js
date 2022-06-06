let word = "apple";
const vowels = 'aeiouy';
let new_arr = [];
let arr = word.toUpperCase().split('');
for (let i = 0; i < arr.length; i++){
    if( word.indexOf(vowels[i]) > -1){
        new_arr.push(word.indexOf(vowels[i]) + 1);
    }
}

console.log(new_arr);