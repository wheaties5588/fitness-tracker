const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter the type of exercise"
      },
      name: {
        type: String,
        trim: true,
        required: "Enter the name of the exercise"
      },
      duration: {
        type: Number,
        required: "Enter the duration of the exercise in seconds"
      },
      weight: {
        type: Number,
        required: "Enter the amount of weight used for the exercise"
      },
      reps: {
        type: Number,
        required: "Enter the number of reps done"
      },
      sets: {
        type: Number,
        required: "Enter the number of sets done"
      }
    }
  ]
},
{
  toJSON: {
      virtuals: true
  }
  
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = { Workout };
