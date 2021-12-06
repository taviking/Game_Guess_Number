const randomInteger = function() {
let rand = 1 + Math.random() * (100 + 1 - 1);
return Math.floor(rand);
}

const game = function() {
  let num = randomInteger()
  console.log(num)
  const questionsFunction = function () {
    const getNumber = prompt('Угадай число от 1 до 100');
    const options = function (){
      if (getNumber === null || getNumber === '')
        alert('Игра окончена');
      else if (+getNumber === num) {
        alert('Поздравляю, Вы угадали!!!');
      } 
      else if (100 < +getNumber || 1 > +getNumber) {
        alert('Введи число от 1 до 100!');
        questionsFunction()
      } else if (+getNumber > num) {
        alert('Загаданное число меньше');
        questionsFunction()
      } else if (+getNumber < num) {
        alert('Загаданное число больше');
        questionsFunction()
      } else if (isNaN(+getNumber)){
        alert('Введи число!');
        questionsFunction()
      }
    } 
      options()
    }
  questionsFunction()
}

game()
