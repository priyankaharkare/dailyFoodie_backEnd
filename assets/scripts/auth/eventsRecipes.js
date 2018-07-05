const getFormFields = require('../../../lib/get-form-fields.js')
const authApi = require('./api')
const authRecipeUi = require('./recipeUi.js')

//
// const revealUpdateForm = function(){
// const updateForm = document.getElementById()
// updateForm.classList.remove('hidden')
// }
//
// let recipeId = 0

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
  console.log('event is ' + event)
  console.log('something happening on update recipe event' + event.target)
  event.preventDefault()
  const recipeId = $(event.target).attr('data-id')
  const data = getFormFields(event.target)
  console.log('onUpdateRecipe data is ' + data)
  // console.log('data-id is ' + data.id)

  authApi.updateRecipe(data, recipeId)
    // .then(authApi.getRecipes())
    .then(authRecipeUi.updateRecipeSuccess)
    .catch(authRecipeUi.updateRecipeFail)
    .then(authApi.getRecipes)
    .then(authRecipeUi.getRecipesSuccess)
}

const onDeleteRecipe = function (event) {
//  console.log('something happening on delete recipe event' + event)
  event.preventDefault()
  const recipeId = $(event.target).attr('data-id')
  // const data = getFormFields(event.target)
  // console.log('recipeId is ' + recipeId)
  authApi.deleteRecipe(recipeId)
    // .then(authApi.getRecipes)
    .then(authRecipeUi.deleteRecipeSuccess)
    .catch(authRecipeUi.deleteRecipeFail)
    .then(authApi.getRecipes)
    .then(authRecipeUi.getRecipesSuccess)
}

// const onShowUpdateForm = function (event) {
//   console.log('event is' + event)
//   console.log('event target is' + event.target)
//   const recipeId = $(event.target).attr('data-id')
//   console.log($(event.target).attr('data-id'))
//   event.preventDefault()
//   $('.update-recipe-' + recipeId).show()
// }

const addHandlers = () => {
  // const updateName = '#update-recipe' + recipeId
  $('#get-all-recipes').on('click', onGetRecipes)
  $('#list-of-recipes').on('click', '.delete-recipe', onDeleteRecipe)
  $('#list-of-recipes').on('submit', '.update-one-recipe', onUpdateRecipe)
  // $('#list-of-recipes').on('click', '#update-recipe', onShowUpdateForm)
  // $('.update-recipes').on('click', revealUpdateForm)
}

module.exports = {
  onCreateRecipe,
  onGetRecipes,
  // onGetOneRecipe,
  onUpdateRecipe,
  onDeleteRecipe,
  addHandlers
  // onShowUpdateForm
  // onDeleteOneRecipe
  // revealUpdateForm
}
