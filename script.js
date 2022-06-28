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