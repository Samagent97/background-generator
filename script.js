4 + 3;
// if (4 + 3 === 7) {
//     console.log ('hellooooo')
// }; 

// function sayHello() {
//     console.log('hello');
// }
// sayHello();


// var sayBye = function() {
//     console.log('im getting it');
// }
// sayBye();

// function sing() {
//     console.log('ahhhhhhhhh');
//     console.log('ehhhhhhhhh');
// }

// sing();


// function rapper() {
//     console.log('ryhmes and poem');
//     console.log('greatest song ever');
// }

// rapper();


// sing();   





// function game(play){
//     console.log(play);
// } 

// game('mortal kombat');
// game('gta');
// game('zuma');
// game('crazy day');

// function multiply(a,b) {
//     if (a > 10 ||b < 30 )
//     console.log('i don hook for return');
    
// }
// multiply(5,10);

// var list = ['tiger','lion','elephant']
// console.log(list[0]);

//Objects

/*var user = {
    name: 'john',
    age: 34,
    hobby: 'soccer',
    isMarried: false,
    shout: function(){
        console.log('arrrrrhhh');
    }
};

//exercise build facebook 1&2
var list = [
    {
        username: 'jacob',
        password: '123'
    },
    {
        username: 'dave',
        password: 'sucre'
    }
];*/


// var database = [
//     {
//         username: 'Samson',
//         password: 'dondada'
//     }
// ];

// var newsFeed = [
//     {
//         username: 'Bobby',
//         timeline: 'im so tired' 
//     },
//     {
//         username: 'sally',
//         timeline: 'a queen and more'
//     }
// ];


// var userNamePrompt = prompt('whats your username?');
// var passwordPrompt = prompt('whats your password?');

//  function signIn(user, pass){
//      for (var i = 0; i = database.length; i++)
//      if (database[i].username === username &&
//         database[i].password === password ) {
//             console.log(newsFeed);
//         } else {
//             alert('sorry , wrong username and password');
//         }
//     };

//     if (user === database[0].username &&
//         pass=== database[0].password) {
//             console.log(newsFeed)
//         } else{
//             alert('sorry the username was incorect also with the password');
//         }
// }
// signIn();


// var todos = [
//     'clean room',
//     'brush teeth',
//     'take shower',
//     'study js',
//     'exercise'
// ];
// var todosLength = todos.length;
// for (var i=0; i < todos.length; i++ ){
//     todos.pop();
//     console.log(todos);
// }


// var counterOne = 0;
// while (counterOne < 10) {
//     console.log(counterOne);
//     counterOne++
// }


// var button = document.getElementById('enter');
// var input = document.getElementById('userinput');
// var ul = document.querySelector('ul');


// button.addEventListener('click', function() {
//     console.log(input.value);
//  var li = document.createElement('li');
//  li.appendChild(document.createTextNode(input.value));
//  ul.appendChild(li);
//  input.value = '';
// })



// button.addEventListener('keypress', function(event) {
//     if(input.value.length > 0 && event.keycode === 13) {
//  var li = document.createElement('li');
//  li.appendChild(document.createTextNode(input.value));
//  ul.appendChild(li);
//  input.value = '';

//condition ? expr1 : epxr2;
// function isUserValid(bool) {
//     return bool;
// }
// var answer = isUserValid(true) ? 'you may enter' : 'access denied' ;









//     }
// })




// class player {
//     constructor (name, type) {
//         console.log(this);
//         this.name = name;
//         this.type = type;
//     }
//     introduce() {
//         console.log(`Hi i am ${this.name}, im a ${this.type}` )
//     }
// }

// class Wizard extends player {
//     constructor(name, type){
//         super (name, type)

//     }
//     play (){
//           console.log(`weeeee im a ${this.type}`)
//     }
// }
// const wizard1 = new Wizard ('shelly', 'healer');
// const wizard2 =new Wizard ('shawn', 'dark magic');

// 

const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
    
}

// basket.forEach(item =>{     
//     console.log(item);
// })
// iterating 
//for of

// for (item of basket){
//     console.log(item);
// }

for (item in detailedBasket) {
    console.log(item)
}