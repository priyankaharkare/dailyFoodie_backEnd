const store = require('../store.js')

// store is a js object. you can add keys to it.
// creating UI for fail and success events
const signUpSuccess = function (signUpResponse) {
  console.log(`sign up response is ` + `signUpResponse`)
  $('#content').html("You've signed up, Please Login to begin the game!")
  $('#sign-up-form').find('input').val('')
  $('#sign-in-form').find('input').val('')
  $('#change-password-form').find('input').val('')
  // $('#sign-up-form').hide()
}

const signUpFail = function (response) {
  $('#content').html(`Sorry, please try again !,
      <br/> Please Login if you already have an account !`)
  // $('#sign-up-form').find('input').val('')
  // $('#sign-in-form').find('input').val('')
  // $('#change-password-form').find('input').val('')
}

const signInSuccess = function (response) {
  store.user = response.user
  console.log('sign in is working')
  // $('#content').html(`Yaay! You're signed in! <br/> Click on the New Game Button,
  //   and begin the game ! Good Luck !`)
  // $('#sign-in-form').find('input').val('')
  // $('#sign-up-form').find('input').val('')
  // $('#change-password-form').find('input').val('')
  // // $('#sign-up-form').hide()
  // $('#sign-out-form').show()
  // $('#change-password-form').show()
  // $('#hidden').show()
  // $('#hide-navbar').show()
  // $('#sign-in-form').hide()
}

const signInFail = function (response) {
  $('#content').html(`Oh no ! Check your username and password and try again !`)
  $('#sign-in-form').find('input').val('')
  $('#sign-up-form').find('input').val('')
  $('#change-password-form').find('input').val('')
}

const changePasswordSuccess = function (response) {
  $('#content').html('Your Password has been updated')
  $('#change-password-form').find('input').val('')
  $('#sign-up-form').find('input').val('')
  $('#sign-in-form').find('input').val('')
}

const changePasswordFail = function (response) {
  $('#content').html('Sorry, you were not able to change your password,',
    'Please try again !')
  $('#change-password-form').find('input').val('')
  $('#sign-up-form').find('input').val('')
  $('#sign-in-form').find('input').val('')
}

const signOutSuccess = function (response) {
  delete store.user
  console.log('sign out worked')
  // $('#content').html('You have successfully signed out ! See you soon')
  // // store.game.over = true
  // $('#sign-in-form').find('input').val('')
  // $('#change-password-form').find('input').val('')
  // $('#sign-up-form').find('input').val('')
//  $('#sign-up-form').show()
  // $('#hide-navbar').hide()
  // $('#hidden').hide()
  // // $('#get-games-form').hide()
  // $('#sign-in-form').show()
}

const signOutFailure = function (response) {
  console.log('sign out failed')
  $('#content').html('Sorry, try again to Sign Out !!')
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
