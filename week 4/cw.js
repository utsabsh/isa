// const acceptGreaterThanTen = {
//     checkInput: function(x) {
//       if (x > 10) {
//         return "Accepted!";
//       } else {
//         return "Rejected!";
//       }
//     }
//   }
  
//   console.log(acceptGreaterThanTen.checkInput(15)); 
//   console.log(acceptGreaterThanTen.checkInput(5)); 
//   ////
  function calculateTotal(numbers, callback) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total = callback(total, numbers[i]);
    }
    return total;
  }
  
  
  const numbers = [1, 2, 3, 4, 5];
  
  const add = (total, number) => total + number;
  const subtract = (total, number) => total - number;
  const multiply = (total, number) => total * number;
  
  const sum = calculateTotal(numbers, add); 
  const difference = calculateTotal(numbers, subtract);
  const product = calculateTotal(numbers, multiply); 
  
  console.log(sum);
  console.log(difference);
  console.log(product);