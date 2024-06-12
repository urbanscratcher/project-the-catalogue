#!/bin/bash

# Docker Compose를 사용하여 빌드 및 실행
docker-compose up --build

# 첫 번째 명령어가 실패한 경우
if [ $? -ne 0 ]; then
  echo "docker-compose up --build failed. Trying docker compose up --build..."
  docker compose up --build
fi
