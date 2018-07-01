const store = require('../store.js')
const config = require('../config.js')

const signUp = function (data) {
  console.log('ajax sign up is ' + data)
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
const createRecipe = function (data) {
  console.log('data is ' + data)
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
  console.log('is get recipes working?')
  // console.log('data is ', data)
  // it shoeconsole.log('store is ', store)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/recipes',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getOneRecipe = function (data) {
  console.log('is get recipes working?')
  // console.log('data is ', data)
  // console.log('store is ', store)
  console.log(`one recipe success is` + data)
  const existingRecipe = store.recipes
  const recipeId = existingRecipe.find((o, i) => {
    if (o.name === data.name) {
      return o.id // stop searching
    }
  })
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/recipes/' + recipeId.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateRecipe = function (data) {
  console.log('is get recipes working?')
  // console.log('data is ', data)
  // console.log('store is ', store)
  console.log(`one recipe success is` + data)
  let existingRecipe = store.recipes
  let recipeId = existingRecipe.find((o, i) => {
    if (o.name === data.name) {
      return o.id // stop searching
    }
  })
  return $.ajax({
    method: 'PATCH',
    data: {recipe: data},
    url: config.apiUrl + '/recipes/' + recipeId.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteRecipe = function (data) {
  console.log('is get recipes working?')
  // console.log('data is ', data)
  // console.log('store is ', store)
  console.log(`recipe delete is` + data)
  let existingRecipe = store.recipes
  let recipeId = existingRecipe.find((o, i) => {
    if (o.name === data.name) {
      return o.id // stop searching
    }
  })
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/recipes/' + recipeId.id,
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
  getOneRecipe,
  updateRecipe,
  deleteRecipe
}
