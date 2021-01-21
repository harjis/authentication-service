#!/bin/bash

if [ -z "$VERSION" ]
then
      echo "\$VERSION is empty"
      exit 1
fi

if [ -z "$SHA" ]
then
      echo "\$SHA is empty. Run SHA=\$(git rev-parse HEAD)"
      exit 1
fi

docker build -t d0rka/authentication-service-backend-proxy:latest -t d0rka/authentication-service-backend-proxy:$SHA -t d0rka/authentication-service-backend-proxy:$VERSION -f ./backend/Dockerfile.dev ./backend-proxy
docker build -t d0rka/authentication-service-frontend:latest -t d0rka/authentication-service-frontend:$SHA -t d0rka/authentication-service-frontend:$VERSION -f ./frontend/Dockerfile.dev ./frontend

docker push d0rka/authentication-service-backend-proxy:latest
docker push d0rka/authentication-service-frontend:latest

docker push d0rka/authentication-service-backend-proxy:$SHA
docker push d0rka/authentication-service-frontend:$SHA

docker push d0rka/authentication-service-backend-proxy:$VERSION
docker push d0rka/authentication-service-frontend:$VERSION
