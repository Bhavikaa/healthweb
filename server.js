var http = require('https');
var mongoose   = require('mongoose');
//mongoose.connect('mongodb://localhost/test');

mongoose.connect("mongodb://keyur:keyur@ds161169.mlab.com:61169/dialysisweb")
mongoose.connection.on('error', function (err) {
  console.log(err)
});
var DialysisInfo = require('./app/models/DialysisInfo');
http.get('https://data.medicare.gov/resource/eqxu-aw4f.json?$select=provider_number,facility_name,five_star,address_line_1,address_line_2,city,state,zip', function (res) {
    res.setEncoding('utf-8');

    var responseString = '';

    res.on('data', function (data) {
        responseString += data;
    });

    res.on('end', function () {
        //console.log(responseString);
        var responseObject = JSON.parse(responseString);
        console.log(responseObject.length);
        for (var i = 0; i < responseObject.length; i++) {
            console.log(responseObject[i]);
             var dlf = new DialysisInfo();
            dlf.provider_name = responseObject[i].provider_name;
            dlf.facility_name = responseObject[i].facility_name;
            dlf.five_star = responseObject[i].five_star;
            dlf.address_line_1 = responseObject[i].address_line_1;
            dlf.address_line_2 = responseObject[i].address_line_2;
            dlf.city = responseObject[i].city;
            dlf.zip = responseObject[i].zip;
            dlf.state = responseObject[i].state;
            dlf.save(function (err) {
               

            })
        }
       process.exit();

    });
    
})

