function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    product = arr.reduce(function(acc, cur) {
        return acc.concat(cur);
    }).reduce( (a, b) => a * b);
    // Only change code above this line
    console.log(product);
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);