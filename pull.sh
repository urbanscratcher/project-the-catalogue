docker login
docker pull urbanscratcher/project-catalogue
docker run -d --env-file .env -p 3100:3000 urbanscratcher/project-catalogue