#!/bin/bash

jar_local=./lockedin/target/lockedin-0.0.1-SNAPSHOT.jar
frontend_local=./frontend

jar_remote=~/ies_52/build/api/api.jar
frontend_remote=~/ies_52/src/client

remote=deti-engsoft-15

echo Username:
read user


printf "[+] Copy jar..."
scp ${jar_local} ${user}@${remote}:${jar_remote}
printf "[+] Copy frontend..."
scp ${frontend_local}/*.html ${frontend_local}/js ${user}@${remote}:${frontend_remote}
printf "[+] run.sh" 
ssh ${user}@${remote} "cd ies_52; sudo ./run.sh"