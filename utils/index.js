const { Sequelize, Op } = require("sequelize");
const { Movie } = require("../models/models");

const addMovie = async (movieObj) => {
    try {
        const movie = await Movie.create(movieObj);
        console.log(`We added ${movie.title}.`);
    } catch (error) {
        console.log(error);
    }
};

const listMovies = async () => {
    try {
        const movies = await Movie.findAll({});
        console.log("All Movies: ", JSON.stringify(movies, null, 2));
    } catch (error) {
        console.log(error);
    }
}

const findMovie = async (req, res) => {
    try {
        const movie = await Movie.findOne({ where: {title: req.params.title}});
        if(movie === null){
            console.log(`${movie} has returned no results.`)
        } else {
            console.log(JSON.stringify(movie, null, 2));
        }
    } catch (error) {
        console.log(error);
    }
}

const findActor = async (req, res) => {
    try {
        const movie = await Movie.findAll({where: {actor: req.params.actor}});
        if(Object.values(movie)[0] === undefined) {
            console.log(`returned no results, please try again`)
        } else {
            const movieList = JSON.stringify(movie).split(',');
            let movieTitles = []
            for (let i = 0; i <= movieList.length - 1 ; i++){
                if (i % 7 === 0){
                    movieTitles.push(movieList[i])
                }
            }
            const movieSplit = JSON.stringify(movieTitles).split(',');
            console.log(movieSplit[0])
            console.log(movieTitles)
        }
    } catch (error) {
        console.log(error)
    }
}
const updateMovies = async (req, res) => {
    try {
        const updateMovie = await Movie.update({title: req.params.newTitle})
        const film = await Movie.findOne({where: {title: req.params.title}})
        await Movie.save()
        console.log(`${film} updated to ${updateMovie}`)
    } catch (error) {
        console.log(error)
    }
}

const delMovie = async (req, res) => {
    try {
        const movie = await Movie.findOne({ where: {title: req.params.title}});
        const deletedMovie = await Movie.destroy();
        console.log(`${movie.title} has been removed from the database`);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    addMovie,
    listMovies,
    findMovie,
    findActor,
    updateMovies,
    delMovie
};