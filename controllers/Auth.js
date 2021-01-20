const UserModel = require('../models/Users');
const fs = require('fs');
const bcrypt = require('bcryptjs');

class Auth {


    async Register(data,file) {
        // upload file
        const file = file;
        let oldPath = file.path;
        let newpath = element.path + '.png';
        let newname = element.filename + '.png';   

        fs.rename(oldPath,newpath, ()=> {
            console.log("importation succefull ");
        });

        data.avatar = newname;

        // crypt password
        const password_not_crypt = data.password;
        const password_crypt = await bcrypt.hashSync(password_not_crypt,10);

        data.password = password_crypt;

        const user = new UserModel(data);
        const userSaved = await user.save();

        if (userSaved) {
            
            return userSaved;

        } else {

            return false;
            
        }
        
    }


    async Login(data) {

        const matVerify = await UserModel.find({ matricule : data.matricule });

        if (matVerify.length > 0) {

            const passwordVerify = await bcrypt.compare(data.password , matVerify[0].password);

            if (passwordVerify) {

                return matVerify;
                
            } else {

                return 1;
            }

        } else {

            return  0;
        }
    }
}

module.exports = Auth;