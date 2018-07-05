
const store = require('../store.js')
// const authEventsRecipes = require('./eventsRecipes.js')
const showRecipesTemplate = require('../templates/recipes.handlebars')
// const getFormFields = require('../../../lib/get-form-fields.js')

const createRecipeSuccess = function (response) {
  store.recipe = response.recipe
  $('#content-msg').html(`Your new recipe has been added to the recipe box! </br>
                          Click on the 'View All Recipes box to view your recipes !'`)
}

const createRecipeFail = function (response) {
  $('#content-msg').html(`We could not create your recipe, please try again !`)
}

const getRecipesSuccess = function (data) {
  const showRecipesHtml = showRecipesTemplate({ recipes: data.recipes })
  $('#list-of-recipes').html(showRecipesHtml)
  store.recipes = data.recipes
  $('#content-msg').html(`Scroll down to view your recipes !`)
  $('#update-recipe-box').hide()
}

const getRecipesFail = function (response) {
  $('#content-msg').html('We could not find your recipes. Please try again !')
}

const updateRecipeSuccess = function (data) {
  store.update.recipe.name = data.recipe.name
  store.update.recipe.steps = data.recipe.steps
  store.update.recipe.link = data.recipe.link
  $('#content-msg').html('Your recipe has been updated !')
  $('.update-one-recipe-form').find('input').val('')
}

const updateRecipeFail = function () {
  $('#content-msg').html('We could not update your recipe !')
  $('.update-one-recipe-form').find('input').val('')
}

const deleteRecipeSuccess = function (response) {
  $('#content-msg').html('Your recipe has been deleted!')
  $('#delete-recipe').find('input').val('')
}

const deleteRecipeFail = function (response) {
  $('#content-msg').html(`We could not delete your recipe. </br>
                          Please make sure you are deleting your own recipe !`)
  $('#delete-recipe').find('input').val('')
}
module.exports = {
  createRecipeSuccess,
  createRecipeFail,
  getRecipesFail,
  getRecipesSuccess,
  updateRecipeFail,
  updateRecipeSuccess,
  deleteRecipeFail,
  deleteRecipeSuccess
 }
