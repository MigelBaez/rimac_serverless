# rimac_serverless

## Deploy:
* npm install
* serverless config credentials --provider aws --key YOUKEY --secret YOUSECRET
* serverless deploy -v


## Local
* serverless invoke local -f createCliente -p src/mockup/createCliente.json
* serverless invoke local -f getAllCliente 
* serverless invoke local -f getAllPlanets

