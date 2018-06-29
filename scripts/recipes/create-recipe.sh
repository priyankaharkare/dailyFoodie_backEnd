#!/bin/bash

curl "https://daily-foodie.herokuapp.com/recipes" \
  --include \
  --request POST \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "recipe": {
      "name": "'"Toast"'",
      "steps": "'"Avocado on toast"'",
      "link": "'"food.com"'"
    }
  }'

echo
