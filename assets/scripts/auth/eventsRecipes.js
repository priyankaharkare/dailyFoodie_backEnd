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

const onGetRecipes = function () {
  // console.log('something happening on get recipes event' + event.target)
  // event.preventDefault()
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
  const data = getFormFields(event.target)
  // console.log('data is ' + data)
  authApi.deleteRecipe(data)
    .then(authRecipeUi.deleteRecipeSuccess)
    .catch(authRecipeUi.deleteRecipeFail)
}

module.exports = {
  onCreateRecipe,
  onGetRecipes,
  onGetOneRecipe,
  onUpdateRecipe,
  onDeleteRecipe
}
