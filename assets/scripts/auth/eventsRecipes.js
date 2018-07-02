const getFormFields = require('../../../lib/get-form-fields.js')
const authApi = require('./api')
const authRecipeUi = require('./recipeUi.js')

const onCreateRecipe = function (event) {
  console.log('something happening on click event' + event.target)
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log('data is ' + data)
  authApi.createRecipe(data)
    .then(authRecipeUi.createRecipeSuccess)
    .catch(authRecipeUi.createRecipeFail)
}

const onGetRecipes = function (event) {
  // console.log('something happening on get recipes event' + event.target)
  event.preventDefault()
  // const data = getFormFields(event.target)
  // console.log('data is ' + recipes)
  authApi.getRecipes()
    .then(authRecipeUi.getRecipesSuccess)
    .catch(authRecipeUi.getRecipesFail)
}

const onGetOneRecipe = function (event) {
  console.log('something happening on get on recipe event' + event.target)
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is ' + data)
  authApi.getOneRecipe(data)
    .then(authRecipeUi.getOneRecipeSuccess)
    .catch(authRecipeUi.getOneRecipeFail)
}

const onUpdateRecipe = function (event) {
  console.log('something happening on update recipe event' + event.target)
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is ' + data)
  authApi.updateRecipe(data)
    .then(authRecipeUi.updateRecipeSuccess)
    .catch(authRecipeUi.updateRecipeFail)
}

const onDeleteRecipe = function (event) {
  console.log('something happening on delete recipe event' + event)
  event.preventDefault()
  const recipeId = $(event.target).attr('data-id')
  // const data = getFormFields(event.target)
  console.log('recipeId is ' + recipeId)
  authApi.deleteRecipe(recipeId)
    .then(() => onGetRecipes(event))
    .then(authRecipeUi.deleteRecipeSuccess)
    .catch(authRecipeUi.deleteRecipeFail)
}

const addHandlers = () => {
  $('#get-all-recipes').on('click', onGetRecipes)
  $('#list-of-recipes').on('click', '.delete-recipe', onDeleteRecipe)
}

module.exports = {
  onCreateRecipe,
  onGetRecipes,
  onGetOneRecipe,
  onUpdateRecipe,
  onDeleteRecipe,
  addHandlers
}
