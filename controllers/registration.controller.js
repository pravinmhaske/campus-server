let user = require("../models/user.model");
exports.registerUser = function (req, res) {
    // let query = { $or: [{ "mobile": req.body.contactnumber }, 
    // { "email": req.body.email }] };
    let email=req.body.username;
    let query = { "email": email };

    user.findOne(query, function (err, result) {
        let success = false, rowsInserted = 0, isUsernameAlreadyPresent = false, message = `Something went wrong ,while registering the user. Please try again.`;
        if (err) {
            console.log("err" + err);
            res.json({ success: success, rowsInserted: rowsInserted, isUsernameAlreadyPresent: isUsernameAlreadyPresent, message: message });

        } else {
            if (result) {
                success = true;
                isUsernameAlreadyPresent = true;
                message = `Emaild is already registered.Try with different id.`;
                res.json({ success: success, rowsInserted: rowsInserted, isUsernameAlreadyPresent: isUsernameAlreadyPresent, message: message });
            } else { //if user not found ,then save new user in db
                let entry = {
                    email: email,
                    password: req.body.password
                }
                let userObj = new user(entry);
                userObj.save(function (err, result) {
                    // let rowsInserted = 1;
                    if (err) {
                        console.log("err" + err);
                    } else {
                        if (result) {
                            success = true;
                            rowsInserted = 1;
                            message = "User has registered successfully.Login and continue.";
                        } else {
                            success = true;
                            rowsInserted = 0;
                            message = "Some Problem while registering user.Try again.";
                        }
                    }
                    res.json({ success: success, rowsInserted: rowsInserted, isUsernameAlreadyPresent: isUsernameAlreadyPresent, message: message });
                });
            }
        }
    });

}

