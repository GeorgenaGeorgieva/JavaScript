//1.function declaration

function walk() {
    console.log('walking');
}

//function expression - не можем да използваме функцията по-горе.

let walk = function() {
    console.log('walking');
}

// Arrow function

let walk = () => {
    console.log('walking');
}

//hoisting functions - позволява ни да използваме функция преди да сме я декларирали.
//                      Хоистинга качва само декларации, без стойности.

run();

function run() {
    console.log('running');
}

//High-Order function - функция, която приема като параметри други функции 
//                      и/или връща като резултат друга функция.

//Predicate- функция, която връща булева стоност.

//2.Currying - техника за деомпозиране на функцции. връща като резу+лтат някакви вложени унарни(получават само един параметър) функции

function trippleSum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(trippleSum(1)(2)(3));

//Partial Application - конвентиране на функции с определен брой параметри, до функции с по-малко параметри.
//                      Частен случай, който използваме често. взимаме една функция и използваме само част от нейната функционалност.7

function sqr(num) {
    return Math.pow(num, 2);
}

//Immediatеly function expression - функция, която се изпълнява един, единствен път. 
//                                  Анонимна функция, която се изпълнява в момента на деклариране.

var person = (function() {

})();