const { Sequelize, DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    return sequelize.define('Photo', {
        no: { 
            field: 'no',
            type: DataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true 
        },
        filename: {
            field: 'filename',
            type: DataTypes.STRING(100),
            allowNull: false
        },
        url: {
            field: 'url',
            type: DataTypes.STRING(200),
            allowNull: false
        },
        comment: {
            field: 'comment',
            type: DataTypes.STRING(200),
            allowNull: false
        },
        regDate: {
            field: 'reg_date',
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW    
        }
    }, {
        underscored: true,    
        freezeTableName: true,
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        tableName: 'photo'
    });
}