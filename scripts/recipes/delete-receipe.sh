

# ID=3 sh scripts/a/delete-appointments.sh
curl "https://daily-foodie.herokuapp.com/${ID}" \
  --include \
  --request DELETE
  --header "Authorization: Token token=${TOKEN}"


echo
