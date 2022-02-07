const { Sequelize, DataTypes} = require("sequelize");
const connection = require("../db/connection");

const Movie = connection.define("Movies", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
            const rawValue = this.getDataValue('title');
            return firstUpper(rawValue);
        }
    },
    actor: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
            const rawValue = this.getDataValue('actor');
            return firstUpper(rawValue);
        }
    },
    rating: {   
        type: DataTypes.INTEGER,
        allowNull: false,
        set(value) {
            this.setDataValue('rating', value);
        }
    }
});

module.exports = {
    Movie
};