// Создать переменную “item_1” и присвоить ей цифру 5.
// Создать переменную “item_2” и присвоить ей цифру 3.
let item_1 = 5
let item_2 = 3

// Создать переменную “item_3” и присвоить ей сложение item_1 и item_2.
// Вывести в консоль item_3.
let item_3 = item_1 + item_2
console.log(item_3)

// Создать переменную “item_4” и присвоить ей строку “Yolochka”.
let item_4 = "Yolochka"

// Создать переменную “item_5” и присвоить ей переменную item_3.
let item_5 = item_3

// Создать переменную item_2_type и присвоить ей тип переменной item_2.
let item_2_type = typeof item_2

// Вывести в консоль тип данных item_2 и item_2_type в виде “item_2 =”,  “item_2_type =”.
console.log("item_2 =", item_2, typeof(item_2))
console.log("item_2_type =", item_2_type, typeof(item_2_type))

// Создать переменную “age_1” и присвоить ей значение 10.
// Создать переменную “age_2” и присвоить ей значение 18.
// Создать переменную “age_3” и присвоить ей значение 60.
// Если age_1 < age_2, вывести в консоль “You don’t have an access cause your age is ” + “ It’s less than ”.
// Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome!”.
// Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
// Иначе выводите “Technical work”.
let age_1 = 10
let age_2 = 18
let age_3 = 60
if (age_1 < age_2) {
    console.log("You don't have an access cause your age is", age_1)
    console.log("It's less than", age_2) }
if (age_1 >= age_2 & age_1 < age_3) {
    console.log("Welcome!") }
if (age_1 > age_3) {
    console.log("Keep calm and look Culture channel") }
else {
    console.log("Technical work") }

// Напишите программу, которая выведет на экран:
// "Khal Drogo's favorite word is "atjahakar"".
console.log('"Khal Drogo\'s favorite word is "athjahakar""')

// Напишите программу, которая выводит на экран:
// - Did Joffrey agree?
// - He did. He also said "I love using \n".
console.log('- Did Joffrey agree?\n- He did. He also said "I love using \\n".')

// Используя ASCII таблицу, выведите на экран символы ~, ^ и %.
console.log(String.fromCharCode(126))
console.log(String.fromCharCode(94))
console.log(String.fromCharCode(37))

// Выведите на экран строку Do you want to eat, <name>?, где вместо <name> должна использоваться константа stark.
const stark = 'Arya'
console.log(`${'Do you want to eat'}, ${stark}?`)

// Выведите на экран последний символ строки, находящейся в константе name.
const name = 'Na\nharis'
console.log(name[7])