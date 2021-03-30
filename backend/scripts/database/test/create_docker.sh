echo 'install docker POSTGRESQL'
sudo docker run \
  --name cinema \
  -e POSTGRES_PASSWORD=123 \
  -p 5432:5432 \
  -d postgres

echo 'access the PSQL'
sleep 5
sudo psql -h localhost -p 5432 -U postgres

