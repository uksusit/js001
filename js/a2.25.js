// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Доповни код функції getCommonElements(array1, array2), яка приймає два масиви 
// (array1 та array2) довільної довжини в якості параметрів.Усередині функції:

// Створи порожній масив з назвою newArray.
// Використай цикл for для ітерації кожного елемента у array1.
// У середині циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// Якщо він існує, додай елемент до newArray за допомогою методу push.
// Поверни newArray як результат.
// Оголошена функція getCommonElements(array1, array2)
// Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
// Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
// Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
// Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
// Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
// Виклик функції getCommonElements() з випадковими двома масивами повертає правильний масив
// В циклі for використовувалися методи includes і push

function getCommonElements(array1, array2) {
  // Change code below this line
    let newArray = [];
    for (let i = 0; i < array1.length; i += 1){
        if (array2.includes(array1[i])) {
            newArray.push(array1[i]);
        }
    }
    return newArray;

 // Change code above this line
}

console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
