// error.js

exports.getNotFoundPage = (req, res) => {
    res.render('NotFound', { title: 'Not found' });
};
