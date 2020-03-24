var express = require('express');
var router = express.Router();
var Chat = require('../models/Chat');

/* GET chat */
router.get('/', function (req, res, next) {
  Chat.find({}, (err, docs) => {
    if (err) {
      console.log('error loh', err);
      res.send(err);
    } else {
      console.log('berhasil nampil data');
      res.status(200).json(docs)
    }
  })
});

/* POST chat */
router.post('/', function (req, res) {
  Chat.create({
    id: req.body.id,
    name: req.body.name,
    message: req.body.message
  }, (err, docs) => {
    if (err) return res.send('error bro');
    console.log('berhasil nambah data');
    res.json(docs)
  })
});

router.delete('/:id', (req, res) => {
  Chat.findOneAndDelete({
    id: Number(req.params.id)
  }, (err, docs) => {
    if (err) return res.send('error bro');
    console.log('berhasil hapus data');
    res.json(docs)
  });
})

module.exports = router;