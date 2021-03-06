const express = require('express');
const multer = require('multer');
const uploadsConfig =  require('./config/Upload')
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadsConfig); 


routes.post('/posts', upload.single('image'), PostController.store);
routes.get('/posts', PostController.index);

routes.post('/posts/:id/like', LikeController.store)


module.exports = routes;