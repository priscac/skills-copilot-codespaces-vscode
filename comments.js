// Create web server
// Comments API

// Import modules
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Comment = require('../models/comment');
const Post = require('../models/post');

// Create new comment
router.post('/', (req, res, next) => {
    // Create comment object
    const comment = new Comment({
        _id: new mongoose.Types.ObjectId(),
        post: req.body.post,