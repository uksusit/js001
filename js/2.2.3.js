// Метод splice()​

//  Видаляє, додає і замінює елементи у довільному місці масиву.
// Видалення​
// Щоб видалити елементи в масиві, передаються два аргументи.
//   splice(position, num)

// position - вказує на позицію (індекс) першого елемента для видалення
// num - визначає кількість елементів, що видаляються

// Метод splice змінює вихідний масив і повертає масив, що містить видалені елементи. Наприклад, у нас є масив оцінок, який містить п'ять чисел від 1 до 5.

const scores = [1, 2, 3, 4, 5];

// Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
const deletedScores = scores.splice(0, 3);

// Тепер масив scores містить два елементи
console.log(scores); // [4, 5]

// А масив deletedScores містить три видалені елементи
console.log(deletedScores); // [1, 2, 3]


// Наприклад, у нас є масив з назвами кольорів у вигляді рядків.
//  Додамо новий колір перед елементом з індексом 2.

const colors = ["red", "green", "blue"];
console.log(colors);
colors.splice(2, 0, "purple",  "yellow", "pink");
console.log(colors); // ["red", "green", "purple", "blue"]


