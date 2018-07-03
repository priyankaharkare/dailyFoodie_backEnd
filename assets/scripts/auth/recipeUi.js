
const store = require('../store.js')
// const authEventsRecipes = require('./eventsRecipes.js')
const showRecipesTemplate = require('../templates/recipes.handlebars')
// const getFormFields = require('../../../lib/get-form-fields.js')

const createRecipeSuccess = function (response) {
  store.recipe = response.recipe
  console.log(`new recipe response is ` + response)
  $('#content').html('Your new recipe has been added to the recipe box!')
  // authEventsRecipes.onGetRecipes()
  // $('#sign-up-form').find('input').val('')
  // $('#sign-in-form').find('input').val('')
  // $('#change-password-form').find('input').val('')
  // $('#sign-up-form').hide()
}

const createRecipeFail = function (response) {
  console.log('recipe fail response is' + response)
}
$('#content').html(`Sorry, please try again !`)
//   $('#sign-up-form').find('input').val('')
//   $('#sign-in-form').find('input').val('')
//   $('#change-password-form').find('input').val('')
// }
const getRecipesSuccess = function (data) {
  console.log(`get recipes success response is ` + data)
  const showRecipesHtml = showRecipesTemplate({ recipes: data.recipes })
  $('#list-of-recipes').html(showRecipesHtml)
  store.recipes = data.recipes
  $('#update-one-recipe').hide()
  // console.log('response.recipes is ' + response.recipes)
  // console.log(`specific recipe name is ` + response.recipes[3]['name'])
  // console.log(`specific recipe link is ` + response.recipes.link)
  // console.log('all your recipes names are' + response.recipes.map(a => a.name))
//   $('#content').html(`Current Game id is : ${response.user.id} <br/> Your email id is: ${response.game.player_x.email}`)
}

const getRecipesFail = function (response) {
  console.log(`get recipe success response is ` + response)
  // $('#content').html('We could not load the user board. Please try again later !')
}
// console.log(response.recipes.name)

const getOneRecipeSuccess = function (response) {
  console.log('get one recipe success is ' + response)
  const oneRecipeList = Object.values(response.recipe)
  console.log(oneRecipeList)
}

const getOneRecipeFail = function (response) {
  console.log('get one recipe fail is ' + response)
}

const updateRecipeSuccess = function (data) {
  console.log(`update one recipe success response is ` + data)
  //  console.log(`update one recipe success recipeId is` + `recipeId`)
  store.update.recipe.name = data.recipe.name
  store.update.recipe.steps = data.recipe.steps
  store.update.recipe.link = data.recipe.link

  // console.log(response.recipes.name)
}

const updateRecipeFail = function () {
  console.log('update recipe fail')
}

const deleteRecipeSuccess = function (response) {
  console.log(`delete one recipe success response is ` + response.data)
  getRecipesSuccess()
  // console.log(response.recipes.name)
}

const deleteRecipeFail = function (response) {
  console.log('delete recipe fail is ' + response)
}
module.exports = {
  createRecipeSuccess,
  createRecipeFail,
  getRecipesFail,
  getRecipesSuccess,
  getOneRecipeFail,
  getOneRecipeSuccess,
  updateRecipeFail,
  updateRecipeSuccess,
  deleteRecipeFail,
  deleteRecipeSuccess
}
