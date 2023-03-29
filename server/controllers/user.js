// const argon2 = require('argon2'); VERIFY ENCRYPTION METHOD WITH BACKEND. DUMMT CODE BUILT ON ARGON2
const User = require('../models/user');
const { createToken } = require('../utils/user')

exports.login = async (req, res) => {
    let user;
    user = await User.findOne({ email: req.body.email });
    
    //user does not exist
    if (user == null){
        user = await User.findOne({ email: req.body.username });

        if (user == null){
            res.json({ 
                token: '',
                error: true
            });
            return;
        }
    }
    //password validation
    const isValid = await argon2.verify(user.password, req.body.password);
    if (!isValid){
        res.json({ 
            token: '',
            error: true
        });
        return;
    };

    res.json({
        token,
        error: false
    });
};

exports.register = async (req, res) => {
    const hasEmail = await User.findOne({ email: req.body.email });

    if (hasEmail !== null) {
        res.json({ 
            token: '',
            error: true
        });
    } 

    else {
        const hashedPassword = await argon2.hash(req.body.password);
        const userInfo = {
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            username: req.body.username,
            password: hashedPassword,
            isAdmin: adminCode === process.env.ADMIN_CODE,
            enabled: adminCode === process.env.ADMIN_CODE
        };

        const user = await new User(userInfo).save();
        const token = createToken(user._id, user.isAdmin);

        res.json({
            token: user.isAdmin? token:'',
            error: false
        });
    }
};

exports.deleteUser = async (req, res) => {
    await User.deleteOne({ _id: req.params.userId });
    res.json({ message: 'User has been deleted.' });
};

exports.describeUser = async (req, res) => {
    const user = await User.findOne({ _id : req.body.userId });

    res.json(user);
};