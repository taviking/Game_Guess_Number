'use strict'

// Переменые для изменения диапазона игры
let firstNum = 1, lastNum = 100;

// функция образования рамдомного числа для угадывания
const randomInteger = function (min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// фунция самой игры 
const game = function(guessNum) {
  let num = guessNum

// Вложеная функция вызова вопроса
  const questionsFunction = function (){
    const getNumber = prompt(`Угадай число от ${firstNum} до ${lastNum}`)

// Вложеная функция с условиями игры
      const options = function (prepositionalNumber){
        switch(true){
          case prepositionalNumber == null || prepositionalNumber == '':
            return{
              message: 'Игра окончена', 
              condition: true
            };
          case +prepositionalNumber === num:
            return{
              message: 'Поздравляю, Вы угадали!!!', 
              condition: true
            };
          case lastNum < +prepositionalNumber || firstNum > +prepositionalNumber:
            return{
              message: `Введи число от ${firstNum} до ${lastNum}!`, 
              condition: false
            };
          case +prepositionalNumber > num:
            return{
              message: 'Загаданное число меньше', 
              condition: false
            };
          case +prepositionalNumber < num:
            return{
              message: 'Загаданное число больше', 
              condition: false
            };
          case isNaN(+prepositionalNumber):
            return{
              message: 'Введи число!', 
              condition: false
            };
          default:
            return {
              message: `Ты ввел ${prepositionalNumber}, попробуй еще`,
              condition: false
            };
        }
      }
    return options(getNumber)
  }
  return questionsFunction
}

// Присваеваем значение (рамдомного числа) функции game через создания переменой game1  
const game1 = game(randomInteger(firstNum, lastNum))

// Функкция вывода сообщений и прерывания или продолжения игры
const startGame = function() {
  const {message, condition} = game1();
  alert(message);
  if (!condition) startGame();
}

// Вызываем функцию условия начала и конца игры(она в свою очередь вызывает игру)
startGame()


