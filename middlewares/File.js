var fs = require('fs');

class File {

    async UploadFile(file) {

        const data = file;
        let oldPath = data.path;
        let newpath = data.path + '.png';
        let newname = data.filename + '.png';   

        fs.rename(oldPath,newpath, ()=> {
            console.log("importation succefull ");
        });

        let response = [oldPath,newpath,newname];

        console.log(response);
        return response;

    }
}

module.exports = File;