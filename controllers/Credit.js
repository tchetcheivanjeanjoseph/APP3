var creditModel = require('../models/Credit');
var compteModel = require('../models/Compte');

class Credit {

    async setCredit(data) {
        let detail = {
            author: data.author,
    
            somme: data.somme,

            created_at: new Date().toLocaleDateString(),
            updated_at : ''
        };
        const credit = new creditModel(data);
        //
        
        
        const creditSaved = await credit.save();
        //await compte.save();

        if (creditSaved) {
            const compteVerify = await compteModel.find({ author: data.author });
            if (compteVerify.length > 0) {
                let s0 = Number(compteVerify[0].somme);
                let s1 = s0 + Number(data.somme);
                let id = compteVerify[0]._id;
                const compteUpdate = await compteModel.findByIdAndUpdate({ _id: id }, { somme: s1 });
                if (compteUpdate) {
                    return creditSaved;        
                }
            } else {
                const compte = new compteModel(detail);
                await compte.save();
            }
            
        } else {
            return false;
        }
    }


    async getCredit(id) {

        const credit = await creditModel.find({ author: id });

        if (credit.length > 0) {
            
            return credit;

        } else {
            
            return 0;
        }
    }


    async getCompte(id) {
        const compte = await compteModel.findOne({ author: id });
        return compte;
    }

    async getCreditAdmin() {

        const credit = await creditModel.find();

        if (credit.length > 0) {
            
            return credit;

        } else {
            
            return 0;
        }
    }


    async getCompteAdmin() {
        const compte = await compteModel.findOne();
        return compte;
    }

    
}

module.exports = Credit;