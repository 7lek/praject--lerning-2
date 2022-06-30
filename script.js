// const numerOfFilms = +prompt ("сколько фильмов вы уже просмотрели?", "");

//  const personalMovieDB = {
//     count: numerOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
//  };

//  const a = prompt ("Один из последних просмотренных фильмов?", ""),
//     b = prompt ("На сколько оцените его?", ""),
//     c = prompt ("Один из последних просмотренных фильмов?", ""),
//     d = ("На сколько оцените его?", "");

//     personalMovieDB.movies [a] = b;
//     personalMovieDB.movies [c] = d;

//     console.log( personalMovieDB)



//    //  условия
//    const num = 50;

//    if (num < 49) {
//       console.log("Eror");
//    } else if (num > 100) {
//       console.log("Too much");

//    } else {
//       console.log("ok!");
//    }


//    //  тернарный оператор

   

//    (num === 50) ? console.log("ok!") : console.log("Eror");


//    switch (num) {
//       case 49:
//          console.log("Неверно");
//          break;
//          case"100":
//          console.log("Don't right");
//          break;
//          case"51":
//          console.log("Riht");
//          break;
//          default:
//             console.log("Later");
//             break;

//    }

//    // Циклы

//    let sum = 50;

//    while (sum < 55) {
//       console.log(sum);
//       sum++;
//    }

//    do {
//       console.log(sum);
//       sum++;
//    }
//     while (sum < 55);

//     for (let i = 1; i < 8; i++) {
//       if (i === 6) {
//          break;
//       }
//       console.log(i);
     
//     }

    for (let i = 0; i < 3; i++) {
      console.log(i);
      for (let j = 0; j < 3; j++) {
         console.log(j);
      }
    }

// *
// **
// ***
// ****
// *****
// ******

let result = '';
const length = 7;

for ( let i = 1; i < length; i++) {

   for (let j = 0; j < i; j++) {
      result += "*";

   }

   result += '\n';
}

console.log(result);



first: for (let i = 0; i < 3; i++) {
   console.log(`First level: ${i}`);
   for (let j = 0; j < 3; j++) {
      console.log(`Second level: ${j}`);
      for (let k = 0; k < 3; k++) {
         if (k === 2) continue first;
         console.log(`Third level: ${k}`);
      }
   }
 }




//  function firstTask() {
//    for (let i = 5; i <= 10; i++) {
//       console.log(i)
//    }
    
// }

// firstTask()


function secondTask() {

   for ( let i = 20; i => 10; i--) {

      if (i === 13) {
         break;
      }
      
      console.log(i);
   
   }
   
   
}

secondTask() 

for (let i = 2; i <= 10; i++) {

   if (i % 2) continue;
    console.log( i );
 
 
 }

 function thirdTask() {
   for (let i = 2; i <= 10; i++) {

   if (i % 2) continue;
    console.log( i );
 
 
 }
    
    
}

thirdTask()

let i = 2;

while (i++ <= 15) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}



for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

function fifthTask() {
 
   const arrayOfNumbers = [5,6,7,8,9,10];
  
for (let i of arrayOfNumbers) {
   console.log(i);
}
   
   return arrayOfNumbers;
}

fifthTask()

const arrayOfNumbers = [5,6,7,8,9,10];
  
for (let i of arrayOfNumbers) {
   console.log(i);
}
