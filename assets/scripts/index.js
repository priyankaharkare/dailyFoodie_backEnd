'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js') // your JS code goes here
const authEventsRecipes = require('./auth/eventsRecipes.js')

$(() => {
  authEventsRecipes.addHandlers()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  console.log('on sign up is')
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  // $('.box').on('click', authLogic1.switchPlayer)
  // $('.new-game').on('click', authEvents.onCreateGame)

  $('#get-one-recipe-form').on('submit', authEventsRecipes.onGetOneRecipe)
  // $('#get-recipes-form').on('click', authEventsRecipes.onGetRecipes)
  $('#create-recipe-form').on('submit', authEventsRecipes.onCreateRecipe)
  $('#update-recipe-form').on('submit', authEventsRecipes.onUpdateRecipe)
  // $('#delete-one-recipe-form').on('submit', authEventsRecipes.onDeleteRecipe)
  // $('#hidden').hide()
  // $('#hide-navbar').hide()
  // $('#get-games-form').hide()
})
