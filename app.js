require("dotenv").config();
const { Sequelize } = require ("sequelize");

const { addMovie, listMovie, findMovie, findActor, updateMovies, delMovie } = require("./utils/index");
const { Movie } = require("./models/model");
const connection = require("./connection");

const app = async (CLI) => {
    connection.authenticate()
    try {
        if (CLI.add) {
            await Movie.sync({alter:true});
            const movie = await addMovie({title: CLI.title, actor: CLI.actor, rating: CLI.rating})
        } else if (CLI.list) {
            await listMovie;
        } else if (CLI.findMovie) {
            await Movie.sync({alter:true});
            await findMovie();
        } else if (CLI.fineActor) {
            await Movie.sync({alter:true});
            await findActor();
        } else if (CLI.update) {
            await updateMovies();
        } else if (CLI.delete) {
            await Movie.sync({alter:true});
            const movie = await delMovie({title: CLI.title, actor: CLI.actor, rating: CLI.rating});
        }
    } catch (error) {
        console.log(error)
    }
}

app();