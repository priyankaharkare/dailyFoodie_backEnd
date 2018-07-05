const store = require('../store.js')
// const authRecipeUi = require('./recipeUi.js')

// store is a js object. you can add keys to it.
// creating UI for fail and success events
const signUpSuccess = function (signUpResponse) {
  console.log(`sign up response is ` + `signUpResponse`)
  $('#content-msg').html("You've signed up, Please Login to begin the game!")
  $('.sign-up-form').find('input').val('')
  $('#sign-in-form').find('input').val('')
  $('#change-password-form').find('input').val('')
  $('#sign-up-form').hide()
}

const signUpFail = function (response) {
  console.log('sign up fail' + response)
  $('#content-msg-msg').html(`Sorry, please try again !,
      <br/> Please Login if you already have an account !`)
  $('#sign-up-form').find('input').val('')
  $('#sign-in-form').find('input').val('')
  $('#change-password-form').find('input').val('')
}

const signInSuccess = function (response) {
  store.user = response.user
  console.log('sign in response is ' + response)
  console.log('sign in is working')
  // console.log('response user is ' + response.user)
  $('#content-msg').html(`Yaay! You're signed in`)
  // authRecipeUi.getRecipesSuccess()
  $('#sign-in-form').find('input').val('')
  $('#sign-up-form').find('input').val('')
  $('#change-password-form').find('input').val('')
  $('.sign-up-form').hide()
  $('#sign-out-form').show()
  $('#change-password-form').show()
  // $('#hidden').show()
  $('#hide-navbar').show()
  $('#sign-in-form').hide()
  $('#content-msg').html("You've signed in!")
  $('.login-info').show()
  $('.recipes-forms').show()
}

const signInFail = function (response) {
  console.log('sign in failed')
  $('#content-msg').html(`Oh no ! Check your username and password and try again !`)
  $('#sign-in-form').find('input').val('')
  $('#sign-up-form').find('input').val('')
  $('#change-password-form').find('input').val('')
}

const changePasswordSuccess = function (response) {
  $('#content-msg').html('Your Password has been updated')
  $('#change-password-form').find('input').val('')
  $('#sign-up-form').find('input').val('')
  $('#sign-in-form').find('input').val('')
}

const changePasswordFail = function (response) {
  $('#content-msg').html('Sorry, you were not able to change your password,',
    'Please try again !')
  $('#change-password-form').find('input').val('')
  $('#sign-up-form').find('input').val('')
  $('#sign-in-form').find('input').val('')
}

const signOutSuccess = function (response) {
  delete store.user
  console.log('sign out response is ' + response)
  console.log('sign out worked')
  $('#content-msg').html('You have successfully signed out ! See you soon')
  // // store.game.over = true
  $('#sign-in-form').find('input').val('')
  $('#change-password-form').find('input').val('')
  $('#sign-up-form').find('input').val('')
  $('#sign-up-form').show()
  $('#hide-navbar').hide()
  // $('#hidden').hide()
  // // $('#get-games-form').hide()
  $('#sign-in-form').show()
}

const signOutFailure = function (response) {
  console.log('sign out failed')
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
