

# ID=3 sh scripts/a/delete-appointments.sh
curl "http://localhost:4741/recipes/${ID}" \
  --include \
  --request DELETE
  --header "Authorization: Token token=${TOKEN}"


echo
