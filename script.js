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

//     for (let i = 0; i < 3; i++) {
//       console.log(i);
//       for (let j = 0; j < 3; j++) {
//          console.log(j);
//       }
//     }

// // *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const length = 7;

// for ( let i = 1; i < length; i++) {

//    for (let j = 0; j < i; j++) {
//       result += "*";

//    }

//    result += '\n';
// }

// console.log(result);



// first: for (let i = 0; i < 3; i++) {
//    console.log(`First level: ${i}`);
//    for (let j = 0; j < 3; j++) {
//       console.log(`Second level: ${j}`);
//       for (let k = 0; k < 3; k++) {
//          if (k === 2) continue first;
//          console.log(`Third level: ${k}`);
//       }
//    }
//  }




// //  function firstTask() {
// //    for (let i = 5; i <= 10; i++) {
// //       console.log(i)
// //    }
    
// // }

// // firstTask()


// function secondTask() {

//    for ( let i = 20; i => 10; i--) {

//       if (i === 13) {
//          break;
//       }
      
//       console.log(i);
   
//    }
   
   
// }

// secondTask() 

// for (let i = 2; i <= 10; i++) {

//    if (i % 2) continue;
//     console.log( i );
 
 
//  }

//  function thirdTask() {
//    for (let i = 2; i <= 10; i++) {

//    if (i % 2) continue;
//     console.log( i );
 
 
//  }
    
    
// }

// thirdTask()

// let i = 2;

// while (i++ <= 15) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }



// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// function fifthTask() {
 
//    const arrayOfNumbers = [5,6,7,8,9,10];
  
// for (let i of arrayOfNumbers) {
//    console.log(i);
// }
   
//    return arrayOfNumbers;
// }

// fifthTask()





// const arrayOfNumbers = [5,6,7,8,9,10];
  
// for (let i of arrayOfNumbers) {
//    console.log(i);
// }




// function secondTask() {
   
//    const data = [5, 10, 'Shopping', 20, 'Homework'];
   
//  for (let i = 0; i <data.length; i++) {

//    data [i] *= 2; 
   

//    for (let j = 2; i <data.length; i++)
//    data [j] +='- done';

   
// } 


// console.log(data);

//    return data;
  

// }
  
// secondTask()



// const lines = 5;
// let result = '';

// for ( let i = 0; i < lines; i++) {

//    for (let j = 0; j < lines - i; j++) {

//       result += " ";
//    }

//    for (let j = 0; j < 2 * i + 1 ; j++) {

//       result += "*";

//    }
     
   
//    result += '\n';
    
// }

// console.log(result);


// function getMathResult() {
//    let result = 5;
//    for ( let i = 0; i <= 3; i++) {
//        result [i] *=2;
//        console.log(result)
//       //  return result;
//    }

// }

// getMathResult()


// let numberOfFilms;


// function start() {

//    numberOfFilms = +promt('How many films did you saw?', '');

//    while (numberOfFilms == '' || numbersOfFilms == nul || isNaN(numberOfFilms)) {
//       numberOfFilms = +promt('How many films did you saw?', '');

//    }

// }

// start ();

// const personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    private: false
// };



// function rememberMyFilms() {
//    for (let i = 0; i < 2; i++) {
//       const a = promt('What is name of the lastest film was saw you'),
//       b = prompt('What rate of the film from one to 10');
   
//       if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//          personalMovieDB.movies[a] = b;
//          console.log('done');
//       } else {
//          console.log('error');
//          i--;
   
//       }
   
//    }
// }

// rememberMyFilms();




// function detectedPersonalLevel() {

//    if (personalMovieDB.count < 10) {
//       console.log('So little films was saw');
   
//    }else if (personalMivieDB.count >= 10 && personalMovieDB.count < 30) {
//       console.log('You are a ordinary viewer');
//    } else if (personalMovieDB.count >= 30) {
//       console.log('You are addicted of films');
//    } else {
//       console.log('Error')
   
//    }

// }

// detectedPersonalLevel()

// function showMyDB (hidden) {

//    if (!hidden) {
//       console.log(personalMivieDB);

//    }

// }

// console.log(personalMivieDB);

// howMyDB (personalMivieDB.private);


// function writeYouGenres() {

//    for (let = 1; i <= 3; i++) {
      
//       personalMivieDB.genres[i -1] = promt(`Whats your fovorite genre of folms ${i}`);
//    }
// }

// writeYouGenres();


// function calculateVolumeAndArea(length) {
//    if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//        return "При вычислении произошла ошибка";
//    }

//    let volume = 0,
//        area = 0;
   
//    volume = length * length * length;
//    // length ** 3 - это тоже самое, что и выше или варианты через цикл.
//    // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
//    area = 6 * (length * length);

//    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// calculateVolumeAndArea(5);


// function getCoupeNumber() {

// }

// function getCoupeNumber(seatNumber) {
//    if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//        return "Ошибка. Проверьте правильность введенного номера места";
//    }

//    if (seatNumber === 0 || seatNumber > 36) {
//        return "Таких мест в вагоне не существует";
//    }

//    for (let i = 4; i <= 36; i = i + 4) {
//        if (seatNumber <= i) {
//            return Math.ceil(i / 4);
//        }
//    }

     
  
// }

// getCoupeNumber(33);


// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {

// let str = '';

// arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

// arr.forEach(member => {
//     str += `${member}`
// });

// return str;
    
// }



// showFamily(family);


// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {

// arr.forEach ( city => {
//     console.log(city.toLowerCase())
// })
   
    
// }

// standardizeStrings(favoriteCities)


const someString = 'This is some strange string';

function reverse(str) {

   

    for (let str of someString) {
        str +=  `${''}`, someString.reverse() ;

    console.log(str)

                   
    }

   

}

reverse();
