const express = require('express');
const app = express();
app.use(express.static('public'));
const multer = require('multer');
const path = require('path');
app.listen(3000);

const storages = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,callback)=>{
        return callback(null,`${file.filename}_${Date.now()}_${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage:storages
});

app.post('/upload',upload.single('image'),(req,res)=>{
    res.send({
        success:'upload!!'
    })
});

