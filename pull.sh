docker login
docker pull urbanscratcher/project-catalogue
docker run -d -p 3100:3000 urbanscratcher/project-catalogue --env-file .env