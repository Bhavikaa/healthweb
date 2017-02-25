var express    = require('express');      
var app        = express();                 
var port = process.env.PORT || 8080;       

var router = express.Router();             
var mongoose   = require('mongoose');
mongoose.connect("mongodb://keyur:keyur@ds161169.mlab.com:61169/dialysisweb")
mongoose.connection.on('error', function (err) {
  console.log(err)
});
var DialysisInfo = require('./app/models/DialysisInfo');
router.use(function(req, res, next) {
    console.log('Something is happening.');
    next(); 
});
router.route('/info/').get(function(req, res) {
        DialysisInfo.find(function(err, data) {
              res.setHeader('Access-Control-Allow-Origin', '*');
            if (err){
                res.send(err);
            }else{
                
                res.json(data);
            }    
        });
    });

router.get('/', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({ message: 'hooray! welcome to our api!' });   
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
