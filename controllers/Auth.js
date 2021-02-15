const UserModel = require('../models/Users');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const jwt = require(('jsonwebtoken'));
const File = require('../middlewares/File');

class Auth {


    async Register(data,file) {
        // upload file
        const image = await new File().UploadFile(file);
        /*const file = file;
        let oldPath = file.path;
        let newpath = element.path + '.png';
        let newname = element.filename + '.png';   

        fs.rename(oldPath,newpath, ()=> {
            console.log("importation succefull ");
        });*/

        data.avatar = image[2];

        // crypt password
        const password_not_crypt = data.password;
        const password_crypt = await bcrypt.hashSync(password_not_crypt,10);

        data.password = password_crypt;

        console.log(data);
        const user = new UserModel(data);
        const userSaved = await user.save();

        console.log(userSaved);

        if (userSaved) {
            const token = jwt.sign({ _id: userSaved._id}, process.env.TOKEN_SECRET, { expiresIn: 85000});
            let response = {
                data : userSaved,
                token : token
            };

            return response;

        } else {

            return false;
            
        }
        
    }


    async Login(data) {        
        const matVerify = await UserModel.find({ matricule : data.matricule });
        //console.log(matVerify);
        if (matVerify.length > 0) {

            const passwordVerify = await bcrypt.compare(data.password , matVerify[0].password);

            if (passwordVerify) {

                const token = jwt.sign({ _id: matVerify._id }, process.env.TOKEN_SECRET, { expiresIn: 85000});

                let response = {
                    data : matVerify,
                    token : token
                };

            return response;
                
            } else {

                return 1;
            }

        } else {

            return  0;
        }
    }


    async FindUserByID(id) {
        const user = await UserModel.findOne({ _id: id });
        if (user !== null) {
            return user;
        } else {
            return 0;
        }
        
    }
}

module.exports = Auth;