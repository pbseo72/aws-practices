const fs = require('fs');
const path = require('path');
const http = require('http');
const express = require('express');
const multer = require('multer');
const dotenv = require('dotenv')

// Environment Variables
dotenv.config({path: path.join(__dirname, 'config/app.env')})
dotenv.config({path: path.join(__dirname, 'config/db.env')})
dotenv.config({path: path.join(__dirname, 'config/store.env')})

const router = require('./routes/route');
const logger = require('./logging');

// application setup
const application = express()
    // multipart
    .use(multer({dest: path.join(__dirname, process.env.MULTER_TEMPORARY_STORE)}).single('photo'))
    // view engine
    .set('views', path.join(__dirname, 'view'))
    .set('view engine', 'ejs')
    // static
    .use(express.static(path.join(__dirname, process.env.STATIC_RESOURCES_DIRECTORY)))
    // request router
    .all('*', function (req, res, next) {
        res.locals.req = req;
        res.locals.res = res;
        next();
    })
    .use('/', router);

// server startup
http.createServer(application)
    .on('listening', function(){
        logger.info('Listening on port ' + process.env.PORT);
    })
    .on('error', function(error) {
        if(error.syscall !== 'listen') {
            throw error;
        }

        // handle specific listen errors
        switch(error.code) {
            case 'EACCES':
                logger.error('Port ' + process.env.PORT + ' requires elevated privileges');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                logger.error('Port ' + process.env.PORT + ' is already in use');
                process.exit(1);
                break;
            default:
                throw error;
        }
    })
    .listen(process.env.PORT);