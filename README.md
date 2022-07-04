# Strapi Superbase

[x] connect strapi to supabase
[x] [deploy to GCP App Engine](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/google-app-engine.html)

## Setup Supabase

Easy Peesy

## Deploy to App Engine

Setup App

````

```bash
# <instance_id>:<region>:<instance_name>
# my-project-80760:australia-southeast1:strapi-supabase

gcloud projects list
gcloud init
# connect app engine
touch app.yaml
touch .gcloudignore
# configure app engine
gcloud app deploy app.yaml --project my-project-80760


````
