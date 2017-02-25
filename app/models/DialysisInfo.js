var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DialysisSchema = new Schema(
    {
        provider_number: String,
        facility_name: String,
        five_star: String,
        address_line_1: String,
        address_line_2: String,
        city: String,
        state: String,
        zip: String
    });
    
module.exports = mongoose.model('DialysisInfo', DialysisSchema);    
