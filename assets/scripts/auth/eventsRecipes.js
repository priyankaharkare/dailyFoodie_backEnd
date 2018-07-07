const getFormFields = require('../../../lib/get-form-fields.js')
const authApi = require('./api')
const authRecipeUi = require('./recipeUi.js')

const onCreateRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.createRecipe(data)
    .then(authRecipeUi.createRecipeSuccess)
    .catch(authRecipeUi.createRecipeFail)
}

const onGetRecipes = function (event) {
  event.preventDefault()
  authApi.getRecipes()
    .then(authRecipeUi.showRecipes)
    .then(authRecipeUi.getRecipesSuccess)
    .catch(authRecipeUi.getRecipesFail)
}

// const onGetOneRecipe = function (event) {
//   console.log('something happening on get one recipe event' + event.target)
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   console.log('data is ' + data)
//   authApi.getOneRecipe(data)
//     .then(authRecipeUi.getOneRecipeSuccess)
//     .catch(authRecipeUi.getOneRecipeFail)
// }

// const onDeleteOneRecipe = function (event) {
//   console.log('deleting one recipe')
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   console.log('delete Recipe data is ' + data)
//   authApi.getOneRecipe(data)
//     .then(authRecipeUi.deleteOneRecipeSuccess)
//     .catch(authRecipeUi.deleteOneRecipeFail)
//     .then(authApi.getRecipes)
// }

const onUpdateRecipe = function (event) {
  event.preventDefault()
  const recipeId = $(event.target).attr('data-id')
  const data = getFormFields(event.target)

  authApi.updateRecipe(data, recipeId)
    .then(authRecipeUi.updateRecipeSuccess)
    .then(authApi.getRecipes)
    .then(authRecipeUi.showRecipes)
    .catch(authRecipeUi.updateRecipeFail)
    // // calling getRecipeSuccess so that the page can be rendered without refresh
}

const onDeleteRecipe = function (event) {
  event.preventDefault()
  const recipeId = $(event.target).attr('data-id')
  authApi.deleteRecipe(recipeId)
    .then(authRecipeUi.deleteRecipeSuccess)
    .then(authApi.getRecipes)
    .then(authRecipeUi.showRecipes)
    .catch(authRecipeUi.deleteRecipeFail)
}

const addHandlers = () => {
  $('#get-all-recipes').on('click', onGetRecipes)
  $('#list-of-recipes').on('click', '.delete-recipe', onDeleteRecipe)
  $('#list-of-recipes').on('submit', '.update-one-recipe', onUpdateRecipe)
}

module.exports = {
  onCreateRecipe,
  onGetRecipes,
  onUpdateRecipe,
  onDeleteRecipe,
  addHandlers
}
