const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

const Photo = require('./Photo')(sequelize);
Photo.sync({
    force: process.env.TABLE_CREATE_ALWAYS == 'true',
    alter: process.env.TABLE_ALTER_SYNC == 'true'
});

module.exports = { Photo };
