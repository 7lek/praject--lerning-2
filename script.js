const numerOfFilms = +prompt ("сколько фильмов вы уже просмотрели?", "");

 const personalMovieDB = {
    count: numerOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
 };

 const a = prompt ("Один из последних просмотренных фильмов?", ""),
    b = prompt ("На сколько оцените его?", ""),
    c = prompt ("Один из последних просмотренных фильмов?", ""),
    d = ("На сколько оцените его?", "");

    personalMovieDB.movies [a] = b;
    personalMovieDB.movies [c] = d;

    console.log( personalMovieDB)



   //  условия
   const num = 50;

   if (num < 49) {
      console.log("Eror");
   } else if (num > 100) {
      console.log("Too much");

   } else {
      console.log("ok!");
   }


   //  тернарный оператор

   

   (num === 50) ? console.log("ok!") : console.log("Eror");


   switch (num) {
      case 49:
         console.log("Неверно");
         break;
         case"100":
         console.log("Don't right");
         break;
         case"51":
         console.log("Riht");
         break;
         default:
            console.log("Later");
            break;

   }

   // Циклы

   let sum = 50;

   while (sum < 55) {
      console.log(sum);
      sum++;
   }

   do {
      console.log(sum);
      sum++;
   }
    while (sum < 55);

    for (let i = 1; i < 8; i++) {
      if (i === 6) {
         break;
      }
      console.log(i);
     
    }
