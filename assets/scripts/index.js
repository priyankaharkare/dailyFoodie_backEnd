'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js') // your JS code goes here

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  // $('.box').on('click', authLogic1.switchPlayer)
  $('.new-game').on('click', authEvents.onCreateGame)
  $('.get-game').on('click', authEvents.onGetGames)
  // $('#hidden').hide()
  // $('#hide-navbar').hide()
  // $('#get-games-form').hide()
})
