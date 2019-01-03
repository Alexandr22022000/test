const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const data = process.env;

app.set('port', (process.env.PORT || 4000));

app.get('/*', (req, res) => {
    res.status(200).json(data);
});

app.listen(app.get('port'), () => console.log("Server is started on port " + app.get('port')));