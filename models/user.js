
//import mongoose and uses Schema property
const mongoose = require('mongoose');
const  { Schema } = mongoose;

const UserSchema = new Schema (
    {
        name: {
            type: String,
            require: true,
        },
        surname: {
            type: String,
            require: true,
        },
        department: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: `Department`,
            required: true
        }

        

    },
    {timestamps : true} //auto update the timestamp when inserting/updating
);


//create and exports model
const User = mongoose.model('User', UserSchema);
module.exports = User;



