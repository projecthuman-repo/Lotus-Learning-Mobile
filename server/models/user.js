const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new schema({
    first_name: String,
    last_name: String,
    email: String,

    permission: String,
    enterprise: Boolean,
});

// data access object
const User = mongoose.model('user', UserSchema);
module.exports = User;
