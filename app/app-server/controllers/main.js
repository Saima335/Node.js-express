//anonymous function now named function
module.exports.index=function(req, res, next) {
    res.render('index', { title: 'Express' });
}