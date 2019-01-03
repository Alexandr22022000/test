const express = require('express'),
    app = express();

app.set('port', (process.env.PORT || 4000));

app.get('/*', (req, res) => {
    res.end("Hello!");
});

app.listen(app.get('port'), () => console.log("Server is started on port " + app.get('port')));