const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
var AWS = require("aws-sdk");
const model = require('../model');
const logger = require('../logging');

module.exports = {
    upload: async function(req, res) {
        const url = await storePhoto(req.file);
        await model.Photo.create({
            filename: req.file.originalname,
            url: url,
            comment: req.body.comment
        })
        res.redirect('/');
    }
}

const storePhoto = async function(file) {
    try {
        const content = fs.readFileSync(file.path);

        const key = path.join(process.env.AWS_S3_BUCKET_OBJECT_KEY_PREFIX, file.filename) + path.extname(file.originalname);

        const params = {
            Body: content,
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Key: key,
            ACL: "public-read",
            ContentLength: file.size,
            ContentType: file.mimetype
        };

        const stored = await new AWS.S3({
            "region": process.env.AWS_REGION
        }).upload(params).promise();

        fs.unlinkSync(file.path);

        return stored.Location;
    } catch (err) {
        logger.error(err)
    }
}