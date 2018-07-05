const store = require('../store.js')
// const authRecipeUi = require('./recipeUi.js')

// store is a js object. you can add keys to it.
// creating UI for fail and success events
const signUpSuccess = function (signUpResponse) {
  $('#content-msg').html("You've signed up, Please Login to begin the game!")
  $('.sign-up-form').find('input').val('')
  $('#sign-in-form').find('input').val('')
  $('#change-password-form').find('input').val('')
  $('.sign-up-form').hide()
}

const signUpFail = function (response) {
  $('#content-msg-msg').html(`Sorry, please try again !,
      <br/> Please Login if you already have an account !`)
  $('.sign-up-form').find('input').val('')
  $('#sign-in-form').find('input').val('')
  $('#change-password-form').find('input').val('')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#content-msg').html(`Yaay! You're signed in`)
  $('#sign-in-form').find('input').val('')
  $('.sign-up-form').find('input').val('')
  $('#change-password-form').find('input').val('')
  $('.sign-up-form').hide()
  $('.signing-out').show()
  $('#change-password-form').show()
  $('#sign-in-form').hide()
  $('#content-msg').html("You've signed in!")
  $('.recipes-forms').show()

  $('#create-recipe-form').show()
  $('#get-all-recipes').show()
  $('#get-one-recipe-form').show()
  $('.list-of-recipes').show()
}

const signInFail = function (response) {
  $('#content-msg').html(`Oh no ! Check your username and password and try again !`)
  $('#sign-in-form').find('input').val('')
  $('.sign-up-form').find('input').val('')
  $('#change-password-form').find('input').val('')
}

const changePasswordSuccess = function (response) {
  $('#content-msg').html('Your Password has been updated')
  $('#change-password-form').find('input').val('')
  $('.sign-up-form').find('input').val('')
  $('#sign-in-form').find('input').val('')
}

const changePasswordFail = function (response) {
  $('#content-msg').html('Sorry, you were not able to change your password,',
    'Please try again !')
  $('#change-password-form').find('input').val('')
  $('.sign-up-form').find('input').val('')
  $('#sign-in-form').find('input').val('')
}

const signOutSuccess = function (response) {
  delete store.user
  $('#content-msg').html('You have successfully signed out ! See you soon')
  // // store.game.over = true
  $('#sign-in-form').find('input').val('')
  $('#change-password-form').find('input').val('')
  $('.sign-up-form').find('input').val('')
  $('#hide-navbar').hide()
  $('#change-password-form').hide()

  // $('#hidden').hide()
  // // $('#get-games-form').hide()
  $('.sign-up-form').show()
  $('#sign-in-form').show()
  $('#create-recipe-form').hide()
  $('#get-all-recipes').hide()
  $('#get-one-recipe-form').hide()
  $('.recipes-forms').hide()
  $('.list-of-recipes').find('input').val('')
  $('.list-of-recipes').empty()
}

const signOutFailure = function (response) {
  $('#content-msg').html('Sorry, try again to Sign Out !!')
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInFail,
  signInSuccess,
  changePasswordFail,
  changePasswordSuccess,
  signOutSuccess,
  signOutFailure
}
