const mongoose = require( 'mongoose');
const User = mongoose.model('Users');


exports.UserSignUp = (req, res) => {
let new_user = new User(req.body);

new_user.save((err, user) => {

    if(!user) {

        res.json({
            msg: 'Welcome to connecter'
        })
    }

    else {
        res.json(err);
    }
})
};


exports.UserlogIn = (req, res) => {


}