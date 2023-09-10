#!/bin/bash

cp ./api/package.json ./docker/node
cp ./api/pnpm-lock.yaml ./docker/node
docker compose up -d --build
rm -f ./docker/node/package.json
rm -f ./docker/node/pnpm-lock.yaml