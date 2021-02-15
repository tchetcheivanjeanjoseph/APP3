const OutModel = require('../models/Out');
const UserModel = require('../models/Users');
class Request {

    async OutRequest(data) {
        let inLoading = 0;
        const requestVerify = await OutModel.find({ author : data.author });
        console.log(requestVerify);

        if (requestVerify.length > 0) {

            //return 0;
            console.log('Une demande de sortie a été emise pour cet user');

            requestVerify.forEach(async element => {
                if (element.status === '0') {
                    console.log('user already !');
                    //break;
                    inLoading ++;
                    //return 0;

                }
                                
                /*else {
                    console.log('Aucune demande nest en cours !');

                    const out = new OutModel(data);

                    const outSaved = await out.save();
            
                    if (outSaved) {
                        return outSaved;
                    } else {
                        return 1;
                    }

                }*/
            });
            console.log(inLoading);

            if (inLoading > 0) {

                return 0;
            
            } else {

                console.log('Aucune demande nest en cours !');

                    const out = new OutModel(data);

                    const outSaved = await out.save();
            
                    if (outSaved) {
                        return outSaved;
                    } else {
                        return 1;
                    }


            }

        } else {
            
            const out = new OutModel(data);

            const outSaved = await out.save();
    
            if (outSaved) {
                return outSaved;
            } else {
                return 1;
            }
        }
        /*

        const out = new OutModel(data);

        const outSaved = await out.save();

        if (outSaved) {
            return outSaved;
        } else {
            return false;
        }


        */
    }


    async GetOutRequest(id) {
        const request = await OutModel.find({ author: id });
        return request;
    }

    async GetOutRequestInvalided() {
        const request = await OutModel.find({ status: '0'});
        console.log(request);

        return request;
    }


    async GetOutRequestValided() {
        const request = await OutModel.find({ status: '1'});
        console.log(request);

        return request;
    }

    async GetOutRequestInvalidedByUser(id) {
        const request = await OutModel.find({ author: id, status: '0'});
        console.log(request);

        return request;
    }


    async GetOutRequestValidedByUser(id) {
        const request = await OutModel.find({ author: id, status: '1'});
        console.log(request);

        return request;
    }


    async getDetailRequest(id) {
        const request = await OutModel.findOne({ _id : id });
        console.log(request);
        const author = await UserModel.findOne({ _id : request.author });

        console.log(request);
        console.log(author);

        let data = {
            detail_request : request,
            detail_author : author
        };

        return data;
        
    }


   async ConfirmationRequest(id) {
        const request = await OutModel.findByIdAndUpdate({ _id: id }, { status : '1' });

        if (request) {
            
            console.log(request);
            return request;

        } else {

            return false;

        }
    }


    async sortByMotif() {
        const req = await OutModel.aggregate(
            [
                { $group: { _id: "$motivation",  nb: {$sum: 1} }}
            ]
        );
        return req;
    }

    async sortByDate() {
        const req = await OutModel.aggregate([
            { $group: { _id: "$date_started", nb: {$sum: 1}}}
        ]);
        return req;
    }
    
}

module.exports = Request;