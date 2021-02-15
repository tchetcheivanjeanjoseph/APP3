var fs = require('fs');

class File {

    async UploadFile(file) {

        const data = file;
        let oldPath = data[0].path;
        let newpath = data[0].path + '.png';
        let newname = data[0].filename + '.png';   

        fs.rename(oldPath,newpath, ()=> {
            console.log("importation succefull ");
        });

        let response = [oldPath,newpath,newname];

        return response;

    }
}

module.exports = File;