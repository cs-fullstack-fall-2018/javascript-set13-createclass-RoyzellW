class movie {

constructor (movieName, rating, yearReleased) {
    this.movieName = movieName;
    this.rating = rating;
    this.yearReleased = yearReleased;

}

    printMovie() {
        alert("The " + this.movieName + " recieved a rating of: " + this.rating + " in the year of " + this.yearReleased)
    }
}






function main() {


    var incredibles = new movie( "Incredibles", "10/10", "2010");



    var doomesday = new movie("Doomesday", "8/10", "2010");

    incredibles.printMovie();
    doomesday.printMovie();


}

main();