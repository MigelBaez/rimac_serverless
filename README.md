# rimac_serverless

# Deploy:
npm install
serverless deploy -v


# Local
serverless invoke local -f createCliente -p src/mockup/createCliente.json
serverless invoke local -f getAllCliente 
serverless invoke local -f getAllPlanets

