'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js') // your JS code goes here
const authEventsRecipes = require('./auth/eventsRecipes.js')

$(() => {
  authEventsRecipes.addHandlers()
  $('.sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#get-one-recipe-form').on('submit', authEventsRecipes.onGetOneRecipe)
  $('#create-recipe-form').on('submit', authEventsRecipes.onCreateRecipe)
  $('#change-password-form').hide()
  $('#sign-out').hide()
  $('#create-recipe-form').hide()
  $('.recipes-forms').hide()
  $('.signing-out').hide()
  $('.list-of-recipes').hide()
  $('#close-recipes').hide()
})
// code to empty everything in the recipe-list div
$(document).ready(function () {
  $('#close-recipes').click(function () {
    $('.list-of-recipes').empty()
    $('#get-all-recipes').show()
    $('#content-msg').empty()
    $('#close-recipes').hide()
  })
})
