const express = require('express');
const { getArticles, createArticle, updateArticle, deleteArticle, toggleArticleStatus } = require('../controllers/articleController');

const router = express.Router();

router.route('/').get(getArticles).post(createArticle);

router.route('/:id').put(updateArticle).delete(deleteArticle);

router.put('/:id/toggle', toggleArticleStatus);

module.exports = router;