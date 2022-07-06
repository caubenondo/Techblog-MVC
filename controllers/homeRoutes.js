const { Post, User } = require('../models');
const Comment = require('../models/Comment')
const withAuth = require('../utils/auth');
const router = require('express').Router();

router.get('/', async (req,res)=>{
    try {
        // JOIN TABLES
        const postData = await Post.findAll({
            include:[
                {
                    model:User,
                    attributes:['username']
                },{
                    model: Comment,
                    include: {model:User,attributes:['username']},
                    attributes:['description','date_created','id']
                }
            ],
            order:[['date_created','DESC']]
        })
        const posts = postData.map((post)=> post.get({plain:true}));

        // render posts as well as current logged in user
        res.render('homepage',{
            posts,      
            logged_in: req.session.logged_in,
            user_id: req.session.user_id,
            currentUser: req.session.currentUser          
        })

    } catch (error) {
        res.status(500).json(error);
    }
})

// if the user logged in, go to homepage
router.get('/login',(req,res)=>{
    
    if(req.session.logged_in){
        res.redirect('/')
    }else{
        res.render('login')
    }
    
})

// Handle dashboard view
router.get('/dashboard', withAuth , async (req,res)=>{
    try {
        const userData = await User.findByPk(req.session.user_id,{
            include:[{model:Post}],
            attributes: {exclude:['password']},
            order:[[{model:Post},'date_created','DESC']]
        })

        const user = userData.get({plain:true})
        res.render('dashboard',{
            ...user,
            logged_in:req.session.logged_in,
            currentUser: req.session.currentUser
        })
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router;