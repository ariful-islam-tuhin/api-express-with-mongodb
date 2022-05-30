const express = require('express');
const router = express.Router();
const Post = require('../models/Post')


// get all post data
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        //    console.log(posts);
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});

// post one by one data
router.post('/', async (req, res) => {
    // console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savePost = await post.save();
        res.json(savePost);
    } catch (err) {
        res.json({ message: err })
    }
});


// single post-data find or get
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
});

// delete any post
router.delete('/:postId', async (req, res) => {

    try {
        const removePost = await Post.remove({ _id: req.params.postId });
        res.json(removePost)
    } catch (err) {
        res.json({ message: err })
    }

});

// update any post 
router.patch('/:postId', async (req,res) => {

try{
 const updatePost = await Post.updateOne(
     {_id: req.params.postId},
     {$set: {title: req.body.title}}
     );
     res.json(updatePost);

}catch(err){
    res.json({message:err});
}
});

module.exports = router;