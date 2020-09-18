const path = require("path");


module.exports = function (app) {
    
    app.get("/", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/exercise", function (req, res) {
        res.sendfile(path.join(__dirname, "../public/exercise.html"));
    });
    
    app.get("/stats", (req,res) => {
        res.sendFile(path.join(__dirname,"../public/stats.html"));
    });
    
}