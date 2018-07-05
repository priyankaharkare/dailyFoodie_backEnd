const store = require('../store.js')
const config = require('../config.js')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// end of user authentication
// start recipe Api

const createRecipe = function (data) {
  return $.ajax({
    method: 'POST',
    data: {recipe: data},
    url: config.apiUrl + '/recipes',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
// show all recipes
const getRecipes = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/recipes',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const getOneRecipe = function (data) {
//   console.log('is get one recipe working?')
//   console.log('data one recipe is ', data)
//   // console.log('store is ', store)
//   console.log(`one recipe success is` + data)
//   const existingRecipe = store.recipes
//   const recipeId = existingRecipe.find((o, i) => {
//     if (o.name === data.name) {
//       return o.id // stop searching
//     }
//   })
//   return $.ajax({
//     method: 'GET',
//     url: config.apiUrl + '/recipes/' + recipeId.id,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

const updateRecipe = function (data, recipeId) {
  return $.ajax({
    method: 'PATCH',
    data: {recipe: data},
    url: config.apiUrl + '/recipes/' + recipeId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteRecipe = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/recipes/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp: signUp,
  signIn: signIn,
  changePassword,
  signOut: signOut,
  createRecipe: createRecipe,
  getRecipes: getRecipes,
  updateRecipe,
  deleteRecipe
}
