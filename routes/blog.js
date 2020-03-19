var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const db = require('monk')('localhost:27017/tutorialDB')
// const monk = require('monk')
// // Connection URL
// const url = 'localhost:27017/tutorialDB';




/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render("blog");
    res.send('Display all blog');
});

router.get('/add', function (req, res, next) {
    res.render("addblog");
    res.send('add all blog');
});

router.get('/edit', function (req, res, next) {
    res.send('edit all blog');
});

router.get('/delete', function (req, res, next) {
    res.send('delete all blog');
});

router.post('/add', [
    check("name", "pls input name blog").not().isEmpty(),
    check("description", "pls input description blog").not().isEmpty(),
    check("auther", "pls input auther blog").not().isEmpty(),
    check("file", "pls input image").not().isEmpty(),
    
], function (req, res, next) {
    const errors = validationResult(req);
    var errorResults = errors.errors;

    if (!errors.isEmpty()) {
        console.log(errors)
        console.log(errors)
        res.render('addblog',{errorResults:errorResults});
    }
    else{
       var ct=db.get("blogs")
       ct.insert({
           name:req.body.name,
           description:req.body.description,
           auther:req.body.auther,
           image:req.body.file,
           
        //    file:req.body.file
       },function(err,blog){
           if(err){
               res.send(err)
           }else{
               res.location("/blog/add")
               res.redirect("/blog/add")
           }
       }
       )
    }
});

router.get('/data', function (req, res, next) {
    var ct=db.get("blogs")
    res.send(ct);
});









module.exports = router;