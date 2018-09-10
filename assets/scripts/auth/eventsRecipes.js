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

const updateFormShow = function (event) {
  event.preventDefault()
  console.log(event)
  $('.update-form-' + $(this).data('id')).removeClass('hide')
  // console.log($(this).data('id'))
  $('.update-button').hide()
}

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
  $('#list-of-recipes').on('click', '.update-button', updateFormShow)

  $('#list-of-recipes').on('submit', '.recipe-update-form', onUpdateRecipe)
}

module.exports = {
  onCreateRecipe,
  onGetRecipes,
  onUpdateRecipe,
  onDeleteRecipe,
  addHandlers,
  updateFormShow
}
