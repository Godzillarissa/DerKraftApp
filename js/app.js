$(document).ready(() => {

  const json = getJSON();
  console.log(json);

  const firstWorkout = json.workouts[0];
  const exercises = firstWorkout.exercises;

  exercises.forEach(exercise => {
    const exerciseName = exercise.name;
    const exerciseDetails = `${exercise.weight} kg for ${exercise.sets} sets of ${exercise.reps} reps`;
    const numberOfSets = exercise.sets;

    addExerciseBlock(exerciseName, exerciseDetails, numberOfSets);

  }) /* -- end of exercise block building loop -- */

  function addExerciseBlock(exerciseName, exerciseDetails, numberOfSets) {
    const exerciseGroup = `
      <div class="workout">
        <div class="exercise-container">
          <h2 class="exercise-name">${exerciseName}</h2>
          <p class="exercise-details">${exerciseDetails}</p>
          <div class="set-buttons no-buttons container-fluid">          
          </div>
        </div>
      </div>
    `;

    // add block without buttons first
    $(".exercises").append(exerciseGroup);

    // now add buttons
    for (let i = 0; i < numberOfSets; ++i) {
      $(".no-buttons").append(`<button type="button" class="set-button">5</button>`);
    }
    $(".no-buttons").removeClass("no-buttons");
  }

  $(".set-button").on("click", (event) => {
    const button = $(event.target);
    if(button.hasClass("clicked")) {
      button.removeClass("clicked");
    } else {
      button.addClass("clicked")
    };
  }) /* -- end of JSON -- */

  function getJSON()
  {
    const json = {
      "name" : "Starting Strength",
      "workouts" :
      [
        {
          "name": "A",
          "exercises":
            [
              {
                "name": "Back Squat",
                "weight": 125,
                "sets": 3,
                "reps": 5
              },
              {
                "name": "Bench Press",
                "weight": 75,
                "sets": 3,
                "reps": 5
              },
              {
                "name": "Deadlift",
                "weight": 150,
                "sets": 1,
                "reps": 5
              }
            ]
        }
      ]
    };

    return json;
  }
});
