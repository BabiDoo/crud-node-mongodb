const mongoose = require(`mongoose`);

const departmentSchema = new mongoose.Schema(
    {
        name: { 
            type: String,
            required: true,
        }
    }
);


//create and exports model
module.exports = mongoose.model(`Department`, departmentSchema);

