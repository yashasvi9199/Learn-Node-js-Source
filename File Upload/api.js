const express = require('express')
const app = express()

const multer = require('multer')
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/')
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        }
    })
})

app.post("/upload", upload.single('file'), (req, res) => {
    // res.send("Successfully uploaded")
    res.json(req.file)  // refer to /file.json for output results

}).listen(5000)