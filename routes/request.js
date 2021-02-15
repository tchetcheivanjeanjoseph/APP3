const router = require('express').Router()
const RequestController = require('../controllers/Request');
const VerifyToken = require('../middlewares/VerifyToken');
const multer = require('multer');

const dotenv = require('dotenv');
var upload = multer({dest : 'public/uploads/'});

const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(process.env.DB_CONNECT,
  { useNewUrlParser : true },
  ()=>{
    console.log('connected ....');
  }
);

router.post('/do-exit-request', VerifyToken, async (req,res,next) => {
    console.log(req.body);
    
    const req_exit = await new RequestController().OutRequest(req.body);
    if (req_exit === 0) {
        res.status(400).send('Request in operate !');
    } else if (req_exit === 1) {
        res.status(404).send('Erreur in saved !');
    } else {
        res.status(200).send(req_exit);
    }
});


router.get('/get-request-novalided/:id', VerifyToken, async (req,res,next) => {
    const list_request = await new RequestController().GetOutRequestInvalidedByUser(req.params.id);

    res.status(200).send(list_request);
});


router.get('/get-request-valided/:id', VerifyToken, async (req,res,next) => {
  const list_request = await new RequestController().GetOutRequestValidedByUser(req.params.id);

  res.status(200).send(list_request);
});


router.get('/get-request-novalided-admin', async (req,res,next) => {
  const list_request = await new RequestController().GetOutRequestInvalided();

  res.status(200).send(list_request);
});


router.get('/get-request-valided-admin', async (req,res,next) => {
const list_request = await new RequestController().GetOutRequestValided();

res.status(200).send(list_request);
});


router.post('/get-request-detail', async (req,res,next) => {
  const detail_request = await new RequestController().getDetailRequest(req.body._id);
  res.status(200).send(detail_request);
});


router.post('/confirmation', VerifyToken, async (req,res,next) => {
  const confirmation = await new RequestController().ConfirmationRequest(req.body._id);
  if (confirmation === false) {
    res.status(400).send(res.statusMessage);
  } else {
    res.status(200).send(confirmation);

  }
});


router.get('/get-req/:id', VerifyToken, async (req,res,next) => {
  const count = await new RequestController().GetOutRequest(req.params.id);
  res.status(200).send(count);
});


router.get('/sort-by-motif', async (req,res,next) => {
  const data = await new RequestController().sortByMotif();
  res.status(200).send(data);
});


router.get('/sort-by-date', async (req,res,next) => {
  const data = await new RequestController().sortByDate();
  res.status(200).send(data);
});


module.exports = router