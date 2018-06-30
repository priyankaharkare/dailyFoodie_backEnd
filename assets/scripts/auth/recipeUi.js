const store = require('../store.js')

const newRecipeSuccess = function (response) {
  console.log(`new recipe response is ` + response)
  $('#content').html('Youre new recipe, Please Login to begin the game!')
  // $('#sign-up-form').find('input').val('')
  // $('#sign-in-form').find('input').val('')
  // $('#change-password-form').find('input').val('')
  // $('#sign-up-form').hide()
}

const newRecipeFail = function (response) {
  console.log('recipe fail response is' + response)
}
// $('#content').html(`Sorry, please try again !,
//       <br/> Please Login if you already have an account !`)
//   $('#sign-up-form').find('input').val('')
//   $('#sign-in-form').find('input').val('')
//   $('#change-password-form').find('input').val('')
// }

module.exports = {
  newRecipeSuccess,
  newRecipeFail
}
