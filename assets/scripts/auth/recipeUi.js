
const store = require('../store.js')
// const authEventsRecipes = require('./eventsRecipes.js')
const showRecipesTemplate = require('../templates/recipes.handlebars')
// const getFormFields = require('../../../lib/get-form-fields.js')

const createRecipeSuccess = function (response) {
  store.recipe = response.recipe
  console.log(`new recipe response is ` + response)
  $('#content-msg').html(`Your new recipe has been added to the recipe box! </br>
                          Click on the 'View All Recipes box to view your recipes !'`)
  // $('#content-div').html('Your new recipe has been added to the recipe box!')
  // authEventsRecipes.onGetRecipes()
  // $('#sign-up-form').find('input').val('')
  // $('#sign-in-form').find('input').val('')
  // $('#change-password-form').find('input').val('')
  // $('#sign-up-form').hide()
}

const createRecipeFail = function (response) {
  console.log('recipe fail response is' + response)
  $('#content-msg').html(`We could not create your recipe, please try again !`)
}
// $('#content-msg').html(`Sorry, pplease try again !`)
//   $('#sign-up-form').find('input').val('')
//   $('#sign-in-form').find('input').val('')
//   $('#change-password-form').find('input').val('')
// }
const getRecipesSuccess = function (data) {
  console.log(`get recipes success response is ` + data)
  const showRecipesHtml = showRecipesTemplate({ recipes: data.recipes })
  $('#list-of-recipes').html(showRecipesHtml)
  store.recipes = data.recipes
  console.log('data.recipes is' + data.recipes)
  $('#content-msg').html(`Scroll down to view your recipes !`)
  $('#update-recipe-box').hide()

  // console.log('response.recipes is ' + response.recipes)
  // console.log(`specific recipe name is ` + response.recipes[3]['name'])
  // console.log(`specific recipe link is ` + response.recipes.link)
  // console.log('all your recipes names are' + response.recipes.map(a => a.name))
//   $('#content').html(`Current Game id is : ${response.user.id} <br/> Your email id is: ${response.game.player_x.email}`)
}

const getRecipesFail = function (response) {
  console.log(`get recipe success response is ` + response)
  $('#content-msg').html('We could not find your recipes. Please try again !')
}
// console.log(response.recipes.name)

// const getOneRecipeSuccess = function (response) {
//   console.log('get one recipe success is ' + response)
//   const oneRecipeList = Object.values(response.recipe)
//   console.log('oneRecipeList ' + oneRecipeList)
//   console.log(`one recipe is` + response.recipe)
//   $('#content-msg').html(`Your recipe is :
//                             <tr>
//                               <th>Recipe Name: </th>
//                               <th>${response.recipe.name}</th>
//                             </tr>
//                             <tr>
//                               <th>Recipe Name: </th>
//                               <th>${response.recipe.name}</th>
//                             </tr>
//                             <tr>
//                               <th>Recipe Link: </th>
//                               <th>${response.recipe.link}</th>
//                             </tr>
//                           `)
//   $('#get-one-recipe-form').find('input').val('')
//   $('#delete-one-recipe-form').find('input').val('')
// }
//
// const getOneRecipeFail = function (response) {
//   console.log('get one recipe fail is ' + response)
//   $('#content-msg').html(`We could not find your recipe </br>
//                           Please double check the recipe name and try again`)
//   $('#get-one-recipe-form').find('input').val('')
//   $('#delete-one-recipe-form').find('input').val('')
// }
//
// const deleteOneRecipeSuccess = function (response) {
//   console.log('get one recipe success is ' + response)
//   console.log(`one recipe is` + response.recipe)
//   console.log(`one recipe is` + response.recipe.name)
//   $('#content-msg').html(`${response.recipe.name} has been deleted`)
//   $('#delete-one-recipe-form').find('input').val('')
// }
//
// const deleteOneRecipeFail = function (response) {
//   console.log('get one recipe success is ' + response)
//   console.log(`one recipe is` + response.recipe)
//   console.log(`one recipe is` + response.recipe.name)
//   $('#content-msg').html(`We could not delete your recipe :${response.recipe.name}`)
//   $('#delete-one-recipe-form').find('input').val('')
// }

const updateRecipeSuccess = function (data) {
  console.log(`update one recipe success response is ` + data)
  //  console.log(`update one recipe success recipeId is` + `recipeId`)
  store.update.recipe.name = data.recipe.name
  store.update.recipe.steps = data.recipe.steps
  store.update.recipe.link = data.recipe.link
  $('#content-msg').html('Your recipe has been updated !')
  // console.log(response.recipes.name)
  $('.update-one-recipe-form').find('input').val('')
}

const updateRecipeFail = function () {
  console.log('update recipe fail')
  $('#content-msg').html('We could not update your recipe !')
  $('.update-one-recipe-form').find('input').val('')
}

const deleteRecipeSuccess = function (response) {
  console.log(`delete one recipe success response is ` + response.data)
  $('#content-msg').html('Your recipe has been deleted!')
  $('#delete-recipe').find('input').val('')
  // console.log(response.recipes.name)
}

const deleteRecipeFail = function (response) {
  console.log('delete recipe fail is ' + response)
  $('#content-msg').html(`We could not delete your recipe. </br>
                          Please make sure you are deleting your own recipe !`)
  $('#delete-recipe').find('input').val('')
}
module.exports = {
  createRecipeSuccess,
  createRecipeFail,
  getRecipesFail,
  getRecipesSuccess,
  // getOneRecipeFail,
  // getOneRecipeSuccess,
  updateRecipeFail,
  updateRecipeSuccess,
  deleteRecipeFail,
  deleteRecipeSuccess
  // deleteOneRecipeSuccess,
  // deleteOneRecipeFail
}
