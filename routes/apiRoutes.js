const Workout = require("../models")

module.exports = function (app) {

    app.get("/api/workouts", function (req, res) {
        Workout.find()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            })
    });

    app.post("/api/workouts", function (req, res) {
        Workout.create({})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            })
    });

    app.put("/api/workouts/:id", (req, res) => {
        Workout.findByIdAndUpdate(
            req.params.id,
            { $push: { exercises: req.body } },
            { new: true }
        )
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            })
    });
}