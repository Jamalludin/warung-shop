import express from 'express'
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({name:'Jamalludin', class:'36B'});
});

export default router