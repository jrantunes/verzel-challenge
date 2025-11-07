#!/bin/sh

if [ ! -f .env ]; then
  cp .env.example .env
  echo ".env criado a partir de .env.example"
fi

docker build -t railway-app .