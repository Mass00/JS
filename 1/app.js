let word = "supercalifragilisticexpialidocious";
const vowels = 'AEIOUY';
let new_arr = [];
let arr = word.toUpperCase().split('');
for (let i = 0; i < arr.length; i++){
        for (let x = 0; x < vowels.length; x++){
            if(arr[i] === vowels[x] ){
                new_arr.push(i + 1);
            }
        }
}

console.log(new_arr.sort((a, b) => a - b));