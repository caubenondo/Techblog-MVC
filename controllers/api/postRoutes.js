const { Post } = require('../../models');
const withAuth = require('../../utils/auth')
const router = require('express').Router();

router.post('/',withAuth, async (req,res)=>{
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id : req.session.user_id
        })

        res.status(200).json(newPost)

    } catch (error) {
        res.status(400).json(error)
    }
})

router.delete('/:id',withAuth,async (req,res)=>{
    try {
        const postData = await Post.destroy({
            where:{
                id:req.param.id,
                user_id:req.session.user_id
            }
        })

        if(!postData){
            res.status(404).json({message:'No project found with this id!'})
            return
        }
        res.status(200).json(postData)

    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;
