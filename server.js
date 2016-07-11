var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
    if(req.headers['x-forwarded-proto'] === 'http'){

    } else {
        //es.redirect('http://'+req.hostname+req.url);
        next();
    }
});

app.use(express.static('public'));

app.listen(PORT, function(){
   console.log("Server up and running on port " + PORT);
});