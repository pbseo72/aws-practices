const model = require('../model')

module.exports = {
    index: async function(req, res){
        const photos = await model.Photo.findAll({
            order: [
                ['regDate', 'DESC']
            ]
        });

        res.render('main/index', {
            photos: photos
        });
    }
}