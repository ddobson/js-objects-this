'use strict';

const User = function (name, dateOfBirth, calorieTarget) {
  this.name = name;
  this.dateOfBirth = dateOfBirth;
  this.calorieTarget = calorieTarget;
  this.meals = [];
};

const Meal = function (title, date, description, calories) {
  this.title = title;
  this.date = date;
  this.description = description;
  this.calories = calories;
};

User.prototype.caloriesEatenOn = function (date) {
  let calsEaten = 0;

  for (let i = 0; i < this.meals.length; i++) {
    if (this.meals[i].date === date) {
      calsEaten += this.meals[i].calories;
    }
  }

  return calsEaten;
};

User.prototype.totalCalories = function () {
  let totalCalories = 0;

  // Get the total cals and assign them to totalCalories
  for (let i = 0; i < this.meals.length; i++) {
    totalCalories += this.meals[i].calories;
  }

  return totalCalories;
};

User.prototype.uniqueMealDays = function () {
  let uniqueMealDates = {};
  let uniqueMealDaysCount;

  // Create keys in uniqueMealDates for each Meal.date in User.meals
  for (let i = 0; i < this.meals.length; i++) {
    uniqueMealDates[this.meals[i].date] = null;
  }

  uniqueMealDaysCount = Object.keys(uniqueMealDates).length;

  return uniqueMealDaysCount;
};

User.prototype.avgDailyCalories = function () {
  return this.totalCalories() / this.uniqueMealDays();
};

User.prototype.onTrack = function () {
  if (this.avgDailyCalories() <= this.calorieTarget) {
    return true;
  }

  return false;
};

const mealObj = new User('Dale Dobson', '1988-07-06', 2500);

mealObj.meals.push(new Meal('muffin', '2017-01-04', "Some muffin", 700));
mealObj.meals.push(new Meal('pasta', '2017-01-04', "Some pasta", 700));
mealObj.meals.push(new Meal('pizza', '2017-01-04', "Some pizza", 1000));
mealObj.meals.push(new Meal('waffle', '2017-01-05', "Some waffle", 500));
mealObj.meals.push(new Meal('ham sandwich', '2017-01-05', "Some ham", 600));
mealObj.meals.push(new Meal('ravioli', '2017-01-05', "Some ravs", 700));
mealObj.meals.push(new Meal('tacos', '2017-01-06', "Some tacos", 800));

module.exports = mealObj;
