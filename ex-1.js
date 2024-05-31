// Exercise #1: For Each Function

function forEach(array, operation) {
  let result = []
  for(let i = 0; i < array.length; i++) {
    result.push(array[i] + operation)
  }
  return result
};

let employeeSalaries = [20005, 40000, 32000, 14500, 344000];
let newEmployeeSalaries = [];

newEmployeeSalaries = forEach(employeeSalaries, 5000);

console.log(newEmployeeSalaries);
