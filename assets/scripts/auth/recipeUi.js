const store = require('../store.js')
// const authEventsRecipes = require('./eventsRecipes.js')
// const authApi = require('./api')
// const authEventsRecipes = require('./eventsRecipes.js')
const showRecipesTemplate = require('../templates/recipes.handlebars')
// const getFormFields = require('../../../lib/get-form-fields.js')

const showRecipes = function (data) {
  store.recipes = data.recipes
  const showRecipesHtml = showRecipesTemplate({
    recipes: data.recipes
  })
  $('#list-of-recipes').html(showRecipesHtml)
  return data
}

const createRecipeSuccess = function (response) {
  store.recipe = response.recipe
  $('#content-msg').html(`<h7>Your new recipe has been added to the recipe box! </br>
                          Click on the 'View All Recipes box to view your recipes !</h7>`)
  $('#create-recipe-form').find('input').val('')
  $('#get-all-recipes').show()
}

const createRecipeFail = function (response) {
  $('#content-msg').html('<h7>We could not create your recipe, please try again !</h7>')
  $('#create-recipe-form').find('input').val('')
  $('#get-all-recipes').show()
}

const getRecipesSuccess = function (data) {
  $('#content-msg').html('<h7>Scroll down to view your recipes !</h7>')
  $('#update-recipe-box').hide()
  $('#get-all-recipes').hide()
  $('#close-recipes').show()
  if (data.recipes.length !== 0) {
    $('#content-msg').html(`<h7>Scroll down to view your recipes!</h7>`)
  } else {
    $('#content-msg').html('<h7>No recipes to display</h7>')
  }
}

const getRecipesFail = function (response) {
  $('#content-msg').html('<h7>We could not find your recipes. Please try again !</h7>')
}

const updateRecipeSuccess = function () {
  // store.update.recipe.name = data.recipe.name
  // store.update.recipe.steps = data.recipe.steps
  // store.update.recipe.link = data.recipe.link

  // return (data.recipe.name)
  $('#content-msg').html('<h7>Your recipe has been updated !</h7>')
}

const updateRecipeFail = function () {
  $('#content-msg').html('We could not update your recipe !')
  $('.update-one-recipe-form').find('input').val('')
}

const deleteRecipeSuccess = function () {
  $('#content-msg').html('Your recipe has been deleted!')
  $('#delete-recipe').find('input').val('')
}

const deleteRecipeFail = function () {
  $('#content-msg').html('We could not delete your recipe.')
  $('#delete-recipe').find('input').val('')
}
module.exports = {
  createRecipeSuccess,
  createRecipeFail,
  getRecipesFail,
  getRecipesSuccess,
  updateRecipeFail,
  updateRecipeSuccess,
  showRecipes,
  deleteRecipeFail,
  deleteRecipeSuccess
}
