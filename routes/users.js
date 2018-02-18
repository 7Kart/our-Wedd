var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});


router.get('/login', (req,res, next)=>{
    res.render("login", { title: 'our wedding' });
});

router.post('/login', (req,res, next)=>{
    if(req.body.login === "admin" && req.body.password === "admin"){
        req.session['admin'] = true;
        res.redirect("/admin")
    }else{
        res.redirect("/");
    }
});

router.get('/logout', (req,res,next)=>{
    if (req.session){
        req.session.destroy();
    }
    res.redirect("/");
});

module.exports = router;
