var express = require("express");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.json(vaca);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var vaca = {
    "name" : "Tim Heidcamp",
    "vacation" : {
        "places" : ["45.64, -73.63","40.760, -73.973","32.750, -117.07"]
    }
}