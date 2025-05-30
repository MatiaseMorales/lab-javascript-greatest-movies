// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    return moviesArray.map((movie) => movie.director);


}

function getUniqueDirectors(moviesArray) {
    const all = getAllDirectors(moviesArray);
    return [...new Set(all)];
  }



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const dramaMovies = moviesArray.filter(movie => 
        movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
      );
    
      
      return dramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  const totalScore = moviesArray.reduce((sum, movie) => {
    
    return sum + (movie.score || 0);
  }, 0);

  const average = totalScore / moviesArray.length;
  return Math.round(average * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie =>
    movie.genre && movie.genre.includes("Drama")
  );
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

  const moviesCopy = [...moviesArray];

  // Ordenamos la copia
  return moviesCopy.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year; 
    } else {
      
      return a.title.localeCompare(b.title);
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const clonedArray = [...moviesArray];

 
  const sorted = clonedArray.sort((a, b) => a.title.localeCompare(b.title));

  
  const titles = sorted.map(movie => movie.title).slice(0, 20);

  return titles;
  }


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

  
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
