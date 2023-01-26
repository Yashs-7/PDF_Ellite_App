
//in this file finding user data 



const mongoose = require('mongoose');
const {user} = require('../model/User');


// const user = User.User;
async function findUser(body) {

console.log(body);
// const UserData=body;
    const UserData = await user.findOne({ email: body.email })
        .then(
            (UserData) => {
                if (UserData.password === body.password) {
                    console.log('userfound')
                    console.log(UserData)

                }
            }

        )
        .catch((err) => {
            console.log('user not found')
        })
    return UserData;

}

module.exports = {findUser}