#!/bin/bash

curl "https://daily-foodie.herokuapp.com/recipes" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
