const getFormFields = require('../../../lib/get-form-fields')
const authApi = require('./api')
const authRecipeUi = require('./recipeUi')

const onNewRecipe = function (event) {
  console.log('anything happening')
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.newRecipe(data)
    .then(authRecipeUi.newRecipeSuccess)
    .catch(authRecipeUi.newRecipeFail)
}

module.exports = {
  onNewRecipe: onNewRecipe
}
