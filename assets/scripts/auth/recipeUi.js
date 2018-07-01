const store = require('../store.js')

const createRecipeSuccess = function (response) {
  store.recipe = response.recipe
  console.log(`new recipe response is ` + response)
  $('#content').html('Your new recipe has been added to the recipe box!')
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
const getRecipesSuccess = function (response) {
  console.log(`get recipe success response is ` + response)
  store.recipes = response.recipes
  console.log('response.recipes is ' + response.recipes)
  console.log(response.recipes.name)
//   $('#content').html(`Current Game id is : ${response.user.id} <br/> Your email id is: ${response.game.player_x.email}`)
}

const getRecipesFail = function (response) {
  console.log(`get recipe fail response is ` + response)
  // $('#content').html('We could not load the user board. Please try again later !')
}
const getOneRecipeSuccess = function (response) {
  console.log(`get one recipe success response is ` + response)
  console.log(response.recipes.name)
}

const getOneRecipeFail = function (response) {
  console.log('get one recipe fail is ' + response)
}

const updateRecipeSuccess = function (response) {
  console.log(`update one recipe success response is ` + response)
  // console.log(response.recipes.name)
}

const updateRecipeFail = function (response) {
  console.log('update recipe fail is ' + response)
}

const deleteRecipeSuccess = function (response) {
  console.log(`delete one recipe success response is ` + response)
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
