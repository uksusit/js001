// Доповни код функції filterArray(numbers, value), яка приймає масив чисел (numbers) та значення (value) як параметри. Усередині функції:

// Створи попрожній масив newArray.
// Використай цикл for для ітерації кожного елемента масиву numbers.
// Додай умовний оператор if всередині циклу для перевірки, чи поточний елемент є більшим за value.
// Якщо так, використай метод push для додавання елемента до newArray.
// Поверни newArray як результат.
// Оголошена функція filterArray(numbers, value)
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив
// В циклі for використовувався метод push


function filterArray(numbers, value) {
   // Change code below this line
    let newArray = [];

    for (let i = 0; i <= numbers.length - 1; i += 1) {
        if (numbers[i] > value) {
            newArray.push(numbers[i]);
        }
      
    }
  return newArray;

  // Change code above this line
}

;
console.log(filterArray([12, 24, 8, 41, 76], 38));